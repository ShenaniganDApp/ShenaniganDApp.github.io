import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles';
import discordImage from '../svg/discord.svg';

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

const DiscordButton = () => (
	<StyledLink to="/join">
		<Button>
			<DiscordImage src={discordImage} alt="Join Shenanigan on Discord" />
		</Button>
	</StyledLink>
);

export default DiscordButton;
