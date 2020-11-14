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
import ERC20ABI from '../artifacts/ERC20.json';
import { MdArrowBack } from 'react-icons/md';
import { StakeInput } from '../components';

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
`;

const StyledLink = styled(Link)``;

const Button = styled.div`
	display: flex;
	transition: 0.3s;
	padding: 1rem;
	text-align: center;
	align-items: center;
	backdrop-filter: blur(20px);
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 10px;
	color: ${colors.lightcyan};
	animation: show 3.5s;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		color: ${colors.deeppink};
		text-shadow: ${colors.deeppink} 0 0 5px;
	}
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;

function StakingSection(props, ref) {
	const [injectedProvider, setInjectedProvider] = useState();
	const [address, setAddress] = useState('');
	const [logoutClicks, setLogoutClicks] = useState(0);
	const [stakingPrtcle, setStakingPrtcle] = useState();
	const [stakingLP, setStakingLP] = useState();
	const [prtcleBalance, setPrtcleBalance] = useState();
	const [LPBalance, setLPBalance] = useState();

	const getPrtcleBalance = async () => {
		const tokenAddress = '0xb5d592f85ab2d955c25720ebe6ff8d4d1e1be300';
		const LPAddress = '0xa527dbc7cdb07dd5fdc2d837c7a2054e6d66daf4';
		if (address && injectedProvider) {
			try {
				const contract = new ethers.Contract(tokenAddress, ERC20ABI, injectedProvider);
				const balance = await contract.balanceOf(address);
				setPrtcleBalance(balance);
			} catch (e) {
				console.log(e);
			}
		}
	};

	const getLPBalance = async () => {
		const tokenAddress = '0xa527dbc7cdb07dd5fdc2d837c7a2054e6d66daf4';
		if (address && injectedProvider) {
			try {
				const contract = new ethers.Contract(tokenAddress, ERC20ABI, injectedProvider);
				const balance = await contract.balanceOf(address);
				setLPBalance(balance);
			} catch (e) {
				console.log(e);
			}
		}
	};

	const stakeToken = async () => {};

	const withdrawToken = async () => {};

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
			getPrtcleBalance();
			getLPBalance();
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
				<Text smallMain>Connecting...</Text>
			);
			modalButtons.push(
				<Button
					key="logoutbutton"
					ref={logoutRef}
					style={{ pointer: 'cursor', padding: '0 2rem' }}
					onClick={updateLogoutClicks}
				>
					<Text smallMain>{logoutClicks == 1 ? 'Click again to logout' : displayAddress}</Text>
				</Button>
			);
		} else {
			modalButtons.push(
				<Button key="loginbutton" style={{ pointer: 'cursor', padding: '0 2rem' }} onClick={loadWeb3Modal}>
					<Text smallMain>connect</Text>
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
					</Button>
				</StyledLink>
				{modalButtons}
			</Section>
			<Section
				style={{
					backgroundColor: 'black',
					width: '75%',
					padding: '0% 5% 0 5%',
					flexDirection: 'row',
					border: '3px solid black',
					flexWrap: 'wrap',
					background: `radial-gradient(circle at 50% 100%, rgba(255, 255, 68, 0.7) 0%, rgba(208, 0, 108, 0.7) 55%)`,
					backdropFilter: 'blur(5px)',
					borderRadius: '25px',
				}}
			>
				<Section width="100%" textCentered centered margin={'1rem 0 0 0'}>
					<Text color={colors.lightcyan} title>
						StakE PRTCLE, Earn SHWEaT
					</Text>
				</Section>
				<Section
					style={{
						width: '100%',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				>
					<Section
						style={{
							width: '30rem',
							height: '25vw',
							margin: '2rem 0',
							display: 'flex',
							padding: '1rem',
							alignContent: 'space-around',
						}}
					>
						<Section width="100%">
							<Text shadowed={'black'} color={colors.lightcyan} largeMain>
								How to Stake
							</Text>
						</Section>
						<Text shadowed={'black'} color={colors.lightcyan} smallMain>
							1. Stake PRTCLE or Uniswap PRTCLE-WXDAI LP tokens to earn SHWEAT!
						</Text>
						<Text shadowed={'black'} color={colors.lightcyan} smallMain>
							2. Redeem your SHWEAT for Shenanigan SHWAG.
						</Text>
						<Text shadowed={'black'} color={colors.lightcyan} smallMain>
							3. The longer you stake, the more you earn!
						</Text>
					</Section>
					<Section
						style={{
							width: '30rem',
							height: '25vw',
							backgroundColor: 'rgba(0, 0, 0, 0.4)',
							borderRadius: '15px',
							margin: '2rem 0',
							padding: '1rem',
							display: 'flex',
							alignContent: 'space-around',
						}}
					>
						<Section width="100%">
							<Text largeMain shadowed={colors.deeppink} color={colors.lightcyan}>
								What you Earn
							</Text>
						</Section>
						<Text smallMain shadowed={colors.deeppink} color={colors.lightcyan}>
							1 PRTCLE = 1 SHWEAT / Day
						</Text>
						<Text smallMain shadowed={colors.deeppink} color={colors.lightcyan}>
							1 PRTCLE-WXDAI LP Token = 100 SHWEAT / Day
						</Text>
					</Section>
				</Section>
				<Section
					width="100%"
					style={{ justifyContent: 'space-around', alignContent: 'space-between', margin: '2rem 0' }}
				>
					<StakeInput
						title="STAKE PRTCLE TOKEN"
						background={`black`}
						balance={prtcleBalance}
						stakingAmount={stakingPrtcle}
						setStakingAmount={setStakingPrtcle}
					/>
					<StakeInput
						title="STAKE UNISWAP PRTCLE-WXDAI TOKEN"
						background={'black'}
						balance={LPBalance}
						stakingAmount={stakingLP}
						setStakingAmount={setStakingLP}
					/>
				</Section>
				<Section width="100%" centered margin="2rem 0">
					<Button style={{ padding: '2rem' }}>
						<Text color="black" main>
							Redeem SHWEAT Coming Soon
						</Text>
					</Button>
				</Section>
			</Section>
		</Wrapper>
	);
}

export default StakingSection;
