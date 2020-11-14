import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, Text, Section } from '../styles';
import { ethers } from 'ethers';

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	text-align: center;
	height: 80%;
	margin: auto;
	color: black;
	cursor: pointer;
	border-radius: 15px;
	&:hover {
		transform: scale(0.9);
		background: radial-gradient(circle at 65% 93%, rgba(255, 255, 68, 0.7) 0%, rgba(208, 0, 108, 0.7) 55%);
		color: ${colors.deeppink};
	}
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
`;

const StakingForm = styled.form`
	display: flex;
	flex: 1;
	width: 100%;
	min-height: 3rem;
`;

const StakeInput = ({ title, background, balance, stakingAmount, setStakingAmount }) => {
	const formattedBalance = balance ? ethers.utils.formatEther(balance) : 0;
	return (
		<Section
			style={{
				background: background,
				width: '32rem',
				height: '15rem',
				margin: '2rem 0',
				alignContent: 'space-between',
				borderRadius: '15px',
			}}
		>
			<Section width="100%" centered height="20%" padding={'1rem 0'}>
				<Text color="#e6ffff" smallMain>
					{title}
				</Text>
			</Section>

			<StakingForm>
				<input
					style={{ flex: '70 1 auto', border: '2px solid whitesmoke', fontFamily: 'GreenScreen' }}
					placeholder="Input Stake Amount:"
					type="number"
					min="0"
					value={stakingAmount}
					name="name"
					onChange={(e) => setStakingAmount(e.target.value)}
				/>
				<div
					style={{
						display: 'flex',
						flex: '30 1 auto',
						backgroundColor: '#e6ffff',
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
					}}
					onClick={() => {
						setStakingAmount(formattedBalance);
					}}
				>
					<Text smallMain>Max</Text>
				</div>
			</StakingForm>
			<Section width="100%" centered style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
				<Text smallMain margin="0 1rem" color="#e6ffff">
					Available: {parseFloat(formattedBalance).toFixed(4).toString()}
				</Text>
				<Text margin="0 1rem" color="#e6ffff" smallMain>
					Staked:
				</Text>
			</Section>

			<Section
				style={{
					width: '100%',
					height: '20%',
					justifyContent: 'stretch',
					flexDirection: 'row',
				}}
			>
				<Button
					style={{
						flex: 1,
					}}
				>
					<Text color={colors.lightcyan} smallMain>
						Stake
					</Text>
				</Button>
				<Button
					style={{
						flex: 1,
					}}
				>
					<Text color={colors.lightcyan} smallMain>
						Withdraw
					</Text>
				</Button>
			</Section>
		</Section>
	);
};

export default StakeInput;
