import React from "react";
import SentMessagesTableContainer from "./SentMessagesTableContainer"; 
import MetricsAreaContainer from "./MetricsAreaContainer";
import styled from "styled-components";
import { generateAuthHeader } from "../../helpers/auth";
import { connect } from "react-redux";
import { setSentMessages } from "../../redux/actions";
import APIKeyDropdownContainer from "../Shared/APIKeyDropdownContainer";
import ChartAreaContainer from "./ChartAreaContainer";

const mapStateToProps = state => ({
    apiKeys: state.apiKeys
});

const mapDispatchToProps = dispatch => ({
    setSentMessages: messages => dispatch(setSentMessages(messages))
});

// ReportingPageContainer
// Overarching container for everything on the `reporting` page

class ReportingPageContainer extends React.Component {
    constructor(props) {
        super(props);
        
        // Our initial state
        // (apiKeys[3] is my /real/ API key)
        this.state = {
            apiKey: this.props.apiKeys[3]
        }
    }

    // When the component mounts, fetch all the data we're going to need for this page
    componentDidMount = () => {
        this.fetchReportingData();
    }

    fetchReportingData = () => {
        // Get our URL and auth header ready       
        let url = `https://api.smsglobal.com/v2/sms/`;
        let auth = generateAuthHeader("GET", this.state.apiKey);

        // Hit the API
        fetch(url, {
            headers: {
                "Authorization": auth,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            // Put the messages in the Redux store
            this.props.setSentMessages(json.messages);
        }).catch(err => {
            // If error -> show and log
            // (again, wouldn't be using alert() in prod)
            alert("An error occurred, please check the console for more info")
            console.log(err);
        });
    }

    // Callback for the dropdown component
    setMessageAPIKey = key => {
        // The user has the ability to show metrics for all their API keys
        // The page will try and update as soon as the user selects a new API key
        // This function is here instead of the dropdown container because
        // the component is being reused

        // Set the new API key, and once the state has been updated
        // tell the page to go and get the new data
        this.setState({ apiKey: key }, () => {
            this.fetchReportingData();
        });
    }

    render() {
        return (
            <StyledContainer>
                <APIKeyCotainer>
                    Select an API Key to show reports for that key.
                    <APIKeyDropdownContainer handleChange={this.setMessageAPIKey} />
                </APIKeyCotainer>
                <Row>
                    <ChartAreaContainer />
                    <MetricsAreaContainer />
                </Row>
                <SentMessagesTableContainer />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    height: 55%;
`;

const APIKeyCotainer = styled.div`
    margin-bottom: 1rem;
`;

export default connect(mapStateToProps, mapDispatchToProps) (ReportingPageContainer);