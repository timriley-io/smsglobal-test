import React from "react";
import styled from "styled-components";
import ToInputContainer from "./ToInputontainer";
import FromInputContainer from "./FromInputContainer";
import MessageInputContainer from "./MessageInputContainer";
import SendButtonContainer from "./SendMessageButtonContainer";
import APIKeyDropdownContainer from "../Shared/APIKeyDropdownContainer";
import { connect } from "react-redux";
import { setNewMessageAPIKey } from "../../redux/actions";

const mapDispatchToProps = dispatch => ({
    setMessageAPIKey: key => dispatch(setNewMessageAPIKey(key))
})

// SendMessagePageContainer
// A nice little container for the SendMessage page

class SendMessagePageContainer extends React.Component {
    render() {
        return (
            <StyledContainer>
                <FromInputContainer />
                <ToInputContainer />
                {/* 
                    We handle the change here instead of in the actual component
                    because the component is being re-used on the `reporting` page
                    and we don't want to update the newMessageAPIKey val in the Redux
                    store accidentally
                */}
                <APIKeyDropdownContainer handleChange={this.props.setMessageAPIKey} />
                <MessageInputContainer labelText="Message" />
                <SendButtonContainer />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default connect(null, mapDispatchToProps) (SendMessagePageContainer);