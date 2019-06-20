import React from "react";
import { MessageTextbox } from "../../components/NewMessagePage/MessageTextbox";
import { connect } from "react-redux";
import { setNewMessageText } from "../../redux/actions";

const mapDispatchToProps = dispatch => ({
    setMessageText: text => dispatch(setNewMessageText(text))
});

// MessageInputContianer
// Just a container for the `message` input

class MessageInputContainer extends React.Component {
    // On change handler
    inputHandler = e => {
        // Might do some error checking here in the future
        // e.g. can we use emoji? can we use non-english chars?

        let text = e.target.value;
        this.props.setMessageText(text);
    }

    render() {
        return (
            <MessageTextbox 
                inputHandler={this.inputHandler} 
                labelText={this.props.labelText}    
            />
        );
    }
}

export default connect(null, mapDispatchToProps) (MessageInputContainer);