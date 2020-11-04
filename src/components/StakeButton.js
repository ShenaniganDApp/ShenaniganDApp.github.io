import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, Text, Section } from '../styles';

const StyledLink = styled(Link)`
	flex: 1;
	text-decoration: none;
	&:hover {
		width: 25vw;
	}
`;
const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	height: 80%;
	margin: auto;
	border-radius: 15px;
	border: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};

	&:hover {
		transform: scale(0.9);
		background-color: ${colors.lightcyan};
		color: ${colors.deeppink};
	}
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
`;

const StakeButton = (props) => (
	<StyledLink to="/staking">
		<Button>
			<Text largeMain>Stake</Text>
		</Button>
	</StyledLink>
);

export default StakeButton;
