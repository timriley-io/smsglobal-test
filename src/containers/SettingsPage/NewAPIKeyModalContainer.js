import React from "react";
import { NewAPIKeyModal } from "../../components/SettingsPage/NewAPIKeyModal";
import { connect } from "react-redux";
import { setNewAPIKeyModalVisible, addAPIKey } from "../../redux/actions";

const mapStateToProps = state => ({
    apiKeys: state.apiKeys,
    modalVisible: state.newAPIKeyModalVisible
});

const mapDispatchToProps = dispatch => ({
    setModalVisibile: visible => dispatch(setNewAPIKeyModalVisible(visible)),
    addAPIKey: key => dispatch(addAPIKey(key))
});

// NewAPIKeyModalContainer
// The container for the modal that pops up
// when the user clicks "Add New API key"

class NewAPIKeyModalContainer extends React.Component {
    constructor(props) {
        super(props);

        // Set our default state
        this.state = {
            displayNameErrorText: null,
            keyErrorText: null,
            secretErrorText: null,
            displayName: null,
            key: null,
            secret: null
        };
    }

    // All of the inputs are CONTROLLED, so we're expected
    // to handle all of the incoming changes
    // In a different component I mentioned I was handling all of the input
    // via a switch/case, here I'm using a separate function for each input
    // just to show that I'm comfortable with either style/method
    // (it's probably unnecessary here)
    handleNameInput = e => {
        // All we're doing here is checking if the Display Name already exists
        // and if it does, set and error message
        let input = e.target.value.toLowerCase();
        let res = this.props.apiKeys.find(obj => obj.displayName.toLowerCase() == input);
        
        if (res) {
            this.setState({ displayNameErrorText: "Display name already exists" });
        }
        else if (this.state.displayNameErrorText) {
            this.setState({ displayNameErrorText: null });
        }

        this.setState({ displayName: input });
    }

    handleKeyInput = e => {
        // Check if the API key already exists
        // if it does, display and error message
        let input = e.target.value.toLowerCase();
        let res = this.props.apiKeys.find(obj => obj.key.toLowerCase() == input);

        if (res) {
            this.setState({ keyErrorText: "Key already exists" });
        }
        else if (this.state.keyErrorText) {
            this.setState({ keyErrorText: null });
        }

        this.setState({ key: input });
    }

    handleSecretInput = e => {
        // Check if the API secret exists
        // if it does, display an error message
        let input = e.target.value.toLowerCase();
        let res = this.props.apiKeys.find(obj => obj.secret.toLowerCase() == input);

        if (res) {
            this.setState({ secretErrorText: "Secret already exists" });
        }
        else if (this.state.secretErrorText) {
            this.setState({ secretErrorText: null });
        }

        this.setState({ secret: input });
    }

    // On modal close
    handleClose = (e, flag) => {
        // flag tells us whether the user is trying to add a new API key
        // or whether they're just canelling/escaping out of the modal

        // If the user IS trying to add a new API key
        if (flag) {
            // Check if any of the inputs are in an error state
            let errors = this.state.displayNameErrorText || this.state.keyErrorText || this.state.secretErrorText

            // If there are no errors, go ahead and add the new key
            if (!errors) {
                this.props.addAPIKey({
                    displayName: this.state.displayName,
                    key: this.state.key,
                    secret: this.state.secret
                });
                this.props.setModalVisibile(false);
            }
            // If there are errors -> ask the user to fix them
            else {
                alert("Please fix the errors first.");
            }
        }
        // If the user's just closing the modal -> close it
        else {
            this.props.setModalVisibile(false);
        }
    }

    render() {
        return (
            <NewAPIKeyModal 
                visible={this.props.modalVisible} 
                handleClose={this.handleClose} 
                handleNameInput={this.handleNameInput}
                handleKeyInput={this.handleKeyInput}
                handleSecretInput={this.handleSecretInput}
                displayNameErrorText={this.state.displayNameErrorText}
                keyErrorText={this.state.keyErrorText}
                secretErrorText={this.state.secretErrorText}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewAPIKeyModalContainer);