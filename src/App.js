import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SettingsPageContainer } from "./containers/SettingsPage/SettingsPageContainer";
import SendMessagePageContainer from "./containers/NewMessagePage/SendMessagePageContianer";
import ReportingPageContainer from "./containers/ReportingPage/ReportingPageContainer";
import HeaderBar from "./components/Shared/Headerbar";
import styled from "styled-components";

// App
// The overall app container
// Complete with some lovely react-router routes

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<AppContainer>
					<HeaderBar />
					<ContentContainer>
						<Switch>
							<Route path="/settings" component={SettingsPageContainer} />	
							<Route path="/reporting" component={ReportingPageContainer} />
							<Route component={SendMessagePageContainer} />
						</Switch>
					</ContentContainer>
				</AppContainer>
			</Router>
		);
	}
}

const AppContainer = styled.div`
	box-sizing: border-box;
	height: 100%;
	width: 100%;
`;

const ContentContainer = styled.div`
	margin: 2rem;
	height: calc(100% - 10rem);
`;
