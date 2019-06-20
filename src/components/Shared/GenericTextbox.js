import React from "react";
import styled from "styled-components";

// GenericTextbox
// This class basically just exists because of the styling and the label

export class GenericTextbox extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledInput 
                    type="text" 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.handleInput}
                    value={this.props.value}
                />
                <StyledLabel>{this.props.errorText ? "Error: " + this.props.errorText : ""}</StyledLabel>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
`;

const StyledInput = styled.input`
    height: 2rem;
    width: 15rem;
    border: 1px solid grey;
    border-radius: 5px;
    margin-top: 1.5rem;
    padding: 0.25rem 1rem;
`;

const StyledLabel = styled.label`
    color: red;
    font-size: 0.8rem;
`;