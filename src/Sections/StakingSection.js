import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Section, Text, colors } from '../styles';
import ethers from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import usePoller from '../hooks/usePoller';
import useOnClickOutside from '../hooks/useOutsideAlerter';
import { Link } from 'react-router-dom';
import Blockies from 'react-blockies';
import { MdArrowBack } from 'react-icons/md';

const INFURA_ID = '62fd1818438846a984542dd3520611c4';

const web3Modal = new Web3Modal({
	network: 'mainnet', // optional
	cacheProvider: true, // optional
	providerOptions: {
		walletconnect: {
			package: WalletConnectProvider, // required
			options: {
				infuraId: INFURA_ID,
			},
		},
		/*fortmatic: {
      package: Fortmatic, // required
      options: {
        key: "pk_live_4463D2C286A0B058", // required
      }
    },
    portis: {
      package: Portis, // required
      options: {
        id: "5b42dc23-b8b7-494e-a1e0-a32918e4aebe", // required
      }
    }*/
	},
});

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const StyledLink = styled(Link)``;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: 0.3s;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 15px;
	border: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};
	text-align: center;
	&:hover {
		transform: scale(0.9);
		background-color: ${colors.lightcyan};
		color: ${colors.deeppink};
	}
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
`;

function StakingSection(props, ref) {
	const [injectedProvider, setInjectedProvider] = useState();
	const [address, setAddress] = useState('');
	const [logoutClicks, setLogoutClicks] = useState(0);
	const logoutRef = useRef(null);
	useOnClickOutside(logoutRef, () => setLogoutClicks(0));
	const updateLogoutClicks = () => {
		if (logoutClicks == 2) {
			logoutOfWeb3Modal();
			setLogoutClicks(0);
		} else {
			setLogoutClicks(logoutClicks + 1);
		}
	};
	const updateProviders = async (provider) => {
		console.log('UPDATE provider:', provider);
		let newWeb3Provider = await new ethers.providers.Web3Provider(provider);
		setInjectedProvider(newWeb3Provider);
	};

	const pollInjectedProvider = async () => {
		if (injectedProvider) {
			let accounts = await injectedProvider.listAccounts();
			// console.log('ADDRESS: ', accounts[0]);
			if (typeof setAddress == 'function') setAddress(accounts[0]);
		}
	};
	usePoller(
		() => {
			pollInjectedProvider();
		},
		props.pollTime ? props.pollTime : 1999
	);

	const loadWeb3Modal = async () => {
		const provider = await web3Modal.connect();
		if (typeof setInjectedProvider == 'function') {
			updateProviders(provider);
		}
		pollInjectedProvider();
	};

	const logoutOfWeb3Modal = async () => {
		await web3Modal.clearCachedProvider();
		window.localStorage.removeItem('walletconnect');
		//console.log("Cleared cache provider!?!",clear)
		setTimeout(() => {
			window.location.reload();
		}, 1);
	};

	let modalButtons = [];
	if (typeof setInjectedProvider == 'function') {
		if (web3Modal.cachedProvider) {
			const displayAddress = address ? (
				<>
					<Blockies seed={address.toLowerCase()} size={8} scale={4} />
					<Text>{address.substr(0, 4) + '...' + address.substr(-4)}</Text>{' '}
				</>
			) : (
				<Text>Connecting...</Text>
			);
			modalButtons.push(
				<Button key="logoutbutton" ref={logoutRef} style={{ display: 'flex' }} onClick={updateLogoutClicks}>
					<Text>{logoutClicks == 1 ? 'Click again to logout' : displayAddress}</Text>
				</Button>
			);
		} else {
			modalButtons.push(
				<Button key="loginbutton" onClick={loadWeb3Modal}>
					<Text>connect</Text>
				</Button>
			);
		}
	}

	useEffect(() => {
		const checkForProvider = async () => {
			if (web3Modal.cachedProvider) {
				try {
					if (web3Modal.cachedProvider === 'injected') {
						const accounts = await window.ethereum.request({ method: 'eth_accounts' });
						console.log('injected accounts', accounts);
						if (!accounts.length) {
							await web3Modal.clearCachedProvider();
							window.localStorage.removeItem('walletconnect');
							throw new Error('Injected provider is not accessible');
						} else {
							loadWeb3Modal();
						}
					} else {
						console.log(web3Modal.cachedProvider);
						loadWeb3Modal();
					}
				} catch (e) {
					console.log('Could not get a wallet connection', e);
					return;
				}
			}
		};
		checkForProvider();
	}, []);

	let display = '';
	return (
		<Wrapper>
			<Section
				style={{
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				<StyledLink style={{ textDecoration: 'none' }} to="/home">
					<Button>
						<MdArrowBack size={60} />
						<Text largeMain>Back</Text>
					</Button>
				</StyledLink>
				{modalButtons}
			</Section>
			<Section
				style={{
					backgroundColor: 'black',
					width: '75%',
					height: '75%',
					padding: '5%',
					justifyContent: 'space-around',
					flexDirection: 'row',
					border: '3px solid #ff006c',
					textAlign: 'center',
				}}
			>
				<Text title color={colors.lightcyan} margin="0 0 -10% 0">
					Stake PRTCLE, Earn SHWEAT
				</Text>
				<Section
					style={{
						width: '95%',
						justifyContent: 'space-between',
						flexDirection: 'row',
					}}
				>
					<Section style={{ width: '45%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
						<Text largeMain color={colors.lightcyan}>
							How to Stake
						</Text>
						<Text smallMain color={colors.lightcyan}>
							1. Stake PRTCLE or Uniswap PRTCLE-WXDAI LP tokens to earn SHWEAT!
						</Text>
						<Text smallMain color={colors.lightcyan}>
							2. Redeem your SHWEAT for Shenanigan SHWAG.
						</Text>
						<Text smallMain color={colors.lightcyan}>
							3. The longer you stake, the more you earn!
						</Text>
					</Section>
					<Section style={{ width: '45%' }}>
						<Text largeMain color={colors.lightcyan}>
							What you Earn
						</Text>
						<Text smallMain color={colors.lightcyan}>
							1 PRTCLE = 1 SHWEAT / Day
						</Text>
						<Text smallMain color={colors.lightcyan}>
							1 PRTCLE-WXDAI LP Token = 100 SHWEAT / Day
						</Text>
					</Section>
				</Section>

				<Section
					style={{
						backgroundColor: '#ff006c',
						width: '35%',
						justifyContent: 'space-around',
						alignItems: 'space-between',
					}}
				>
					<Section width="100%" centered height="20%">
						<Text smallMain>STAKE PRTCLE TOKEN</Text>
					</Section>

					<form style={{ display: 'flex', width: '100%' }}>
						<input
							style={{ flex: '70 1 auto' }}
							placeholder="Input Stake Amount:"
							type="text"
							name="name"
						/>
						<div style={{ flex: '30 1 auto', backgroundColor: '#e6ffff' }}>Max</div>
					</form>

					<Section
						style={{
							backgroundColor: '#ff006c',
							width: '100%',
							height: '20%',

							justifyContent: 'stretch',
							flexDirection: 'row',
						}}
					>
						<Button style={{ flex: 1 }}>Stake</Button>
						<Button style={{ flex: 1 }}>Withdraw</Button>
					</Section>
				</Section>
				<Section
					style={{
						backgroundColor: '#e6ffff',
						width: '35%',
						alignItems: 'space-around',
					}}
				>
					<Section width="100%" centered backgroundColor={'#ff4'} height="20%">
						<Text smallMain>STAKE UNISWAP PRTCLE-WXDAI TOKEN</Text>
					</Section>
					<form>
						<input placeholder="Input Stake Amount:" type="text" name="name" />
					</form>
					<Section
						style={{
							backgroundColor: '#ff006c',
							width: '100%',
							height: '20%',
							justifyContent: 'stretch',
							flexDirection: 'row',
							margin: 0,
						}}
					>
						<Button style={{ flex: 1 }}>Stake</Button>
						<Button style={{ flex: 1 }}>Withdraw</Button>
					</Section>
				</Section>
			</Section>
		</Wrapper>
	);
}

export default StakingSection;
