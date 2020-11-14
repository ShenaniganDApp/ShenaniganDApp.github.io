import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, Text, Section } from '../styles';

const StyledLink = styled(Link)`
	flex: 1;
	text-decoration: none;
`;
const Button = styled.div`
	transition: 0.3s;
	padding: 1rem;
	text-align: center;
	backdrop-filter: blur(10px);
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

const StakeButton = (props) => (
	<StyledLink to="/staking">
		<Button>
			<Text shadowed={'black'} largeMain>
				Shtake
			</Text>
		</Button>
	</StyledLink>
);

export default StakeButton;
