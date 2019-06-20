import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { GenericTextbox } from "../Shared/GenericTextbox";
import { GenericPrimaryButton } from "../Shared/GenericPrimaryButton";
import styled from "styled-components";

// NewAPIKeyModal
// The modal that pops up when you click "Add New API Key"

export class NewAPIKeyModal extends React.Component {
    constructor(props) {
        super(props);

        // Initial state for the values in the inputs
        // and the error displays
        this.state = {
            displayNameValue: "",
            keyValue: "",
            secretValue: "",
            displayNameErrorText: null,
            keyErrorText: null,
            secretErrorText: null
        }
    }

    // Controlled component -> this is called on any/every input
    handleInput = (event, field) => {
        // I've written this handler as a switch statement as opposed
        // to elsewhere where I've used seperate functions for each input
        // just to show that I'm comfortable with either style

        let input = event.target.value;
        
        // Check which field triggered the change event
        // and update component state appropriately
        switch (field) {
            case "display_name":
                this.setState({ displayNameValue: input });
                this.props.handleNameInput(event);
            break;
            case "key":
                this.setState({ keyValue: input });
                this.props.handleKeyInput(event);
            break;
            case "secret":
                this.setState({ secretValue: input });
                this.props.handleSecretInput(event);
            break;
            default:
        }
    }

    // Sanity check our inputs before bubbling event up to container
    // Doing this here because it's not dependent on business logic
    // (i.e. isn't exclusive logic for the container)
    sanityCheckInputs = () => {
        // Quick and dirty way of associating the inputs with their error displays
        let inputs = [ this.state.displayNameValue, this.state.keyValue, this.state.secretValue ];
        let errors = [ "displayNameErrorText", "keyErrorText", "secretErrorText" ];
        
        // Just incase someone changes the above arrays in the future
        console.assert(inputs.length == errors.length);

        // Let's do some sanity checking on all the inputs
        // All we're doing right now is making sure they're not empty
        let inputsOK = true;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].length == 0) {
                this.setState({ [errors[i]]: "Can't be blank" });
                inputsOK = false;
            }
        }

        // Return whether the input was OK or not
        return inputsOK;
    }

    // Remove all errors
    // (e.g. when the modal is closed, we remove all the error messages)
    clearErrors = () => {
        this.setState({
            displayNameErrorText: null,
            keyErrorText: null,
            secretErrorText: null
        });
    }

    // On modal close
    handleClose = (event, flag) => {
        // `flag` tells us whether the modal was closed by the user trying
        // to add a new API key or if they simply cancelled/escaped out

        // If the use is trying to add a new key
        // let's do a sanity check
        // if it's all good, propogate the event to the container
        if (flag) {
            let inputsOK = this.sanityCheckInputs();
            if (inputsOK) {
                this.setState({ displayNameValue: "", keyValue: "", secretValue: "" });
                this.props.handleClose(event, flag);
                this.clearErrors();
            }
        }
        // If the user is just closing the modal
        // clear errors and close
        else {
            this.props.handleClose(event, flag);
            this.clearErrors();
        }
    }

    render() {
        return (
            <Rodal visible={this.props.visible} onClose={this.handleClose} customStyles={{ height: "20rem"}} >
                <StyledContainer>
                    <GenericTextbox 
                        handleInput={e => this.handleInput(e, "display_name")} 
                        placeholder="Display Name"
                        errorText={this.state.displayNameErrorText || this.props.displayNameErrorText}
                        value={this.state.displayNameValue}
                    />
                    <GenericTextbox 
                        handleInput={e => this.handleInput(e, "key")} 
                        placeholder="API Key" 
                        errorText={this.state.keyErrorText || this.props.keyErrorText}
                        value={this.state.keyValue}
                    />
                    <GenericTextbox 
                        handleInput={e => this.handleInput(e, "secret")} 
                        placeholder="API Secret" 
                        errorText={this.state.secretErrorText || this.props.secretErrorText}
                        value={this.state.secretValue}
                    />
                    <StyledButton clickHandler={e => this.handleClose(e, "add")} text="Add" />
                </StyledContainer>
            </Rodal>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButton = styled(GenericPrimaryButton)`
    position: absolute;
    bottom: 2rem;
`;