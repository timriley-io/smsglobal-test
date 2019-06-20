import React from "react";
import styled from "styled-components";

// MessageTextbox
// Use this whenever an SMS needs to be entered
// Shows the number of chars and number of message parts

export class MessageTextbox extends React.Component {
    constructor(props) {
        super(props);

        // Keep track of how many charts the user's typed in
        this.state = {
            charCount: 0
        };
    }

    // On input to the textbox
    inputHandler = e => {
        // Update the chart counter
        let charCount = e.target.value.length;
        this.setState({ charCount })

        // Propagate event to container
        this.props.inputHandler(e)
    }

    render() {
        // Work out how many parts this message will be sent as
        let charCount = this.state.charCount;
        let charsPerMessage = 160;
        let messageParts = Math.ceil(charCount / charsPerMessage);
        let maxChars = charsPerMessage * messageParts;

        return (
            <StyledContainer>    
                <StyledLabel>{this.props.labelText}</StyledLabel>
                <StyledTextbox 
                    rows="7"
                    onInput={this.inputHandler} 
                />
                <CharCounter>{`(${messageParts}) ${charCount}/${maxChars}`}</CharCounter>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    width: 25rem;
`;

const StyledTextbox = styled.textarea`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 1rem;
    font-family: sans-serif;
`;

const StyledLabel = styled.label`
    display: inline-block;
    text-align: start;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
`;

const CharCounter = styled.div`
    margin: 0.5rem;
    font-size: 0.75rem;
    color: grey;
    text-align: end;
`;