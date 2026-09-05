import { useEffect } from 'react';
import styled from 'styled-components';
import { LandingSection, AboutSection } from './Sections';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import backgroundImage from './images/background.jpg';
import mobileBackgroundImage from './images/background_mobile.png';

const AppWrapper = styled.div`
	/*Photo by Element5 Digital on Unsplash*/
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: auto, cover;
	background-position: 50%;
	z-index: -1;
	/* Preserve aspect ratio */

	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	@media (max-width: 768px) {
		background-image: url(${mobileBackgroundImage});
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: auto, auto 30%;
	}
`;

function ExternalRedirect({ to }) {
	useEffect(() => {
		window.location.assign(to);
	}, [to]);

	return null;
}

export function AppRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<ExternalRedirect to="http://she.energy/docs" />
			</Route>
			<Route path="/home">
				<LandingSection />
			</Route>
			<Route path="/explain">
				<AboutSection />
			</Route>
			<Route path="/join">
				<ExternalRedirect to="https://discord.gg/Pz6sK3AM3f" />
			</Route>
			<Route path="/swap">
				<ExternalRedirect to="https://app.honeyswap.org/#/swap?outputCurrency=0xB5d592f85ab2D955c25720EbE6FF8D4d1E1Be300" />
			</Route>
			<Route render={() => <p>Not Found</p>} />
		</Switch>
	);
}

function App() {
	return (
		<Router>
			<AppWrapper id="top">
				<AppRoutes />
			</AppWrapper>
		</Router>
	);
}

export default App;
