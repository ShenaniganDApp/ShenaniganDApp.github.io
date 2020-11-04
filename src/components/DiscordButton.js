import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, Text, Section } from '../styles';

const StyledLink = styled(Link)`
	width: 15vw;
	height: 15vw;
	max-width: 6rem;
	max-height: 6rem;
	&:hover {
		width: 25vw;
	}
`;
const Button = styled.div`
	cursor: pointer;
	transition: 0.1s;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: ${colors.black};
	overflow: hidden;
	&:hover {
		transform: scale(1.1);
	}
	float: right;
`;

const DiscordImage = styled.img``;

const DiscordButton = (props) => (
	<StyledLink to="/join">
		<Button>
			<DiscordImage src={require('../svg/discord.svg')}></DiscordImage>d
		</Button>
	</StyledLink>
);

export default DiscordButton;
