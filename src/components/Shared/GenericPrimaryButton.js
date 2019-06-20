import React from "react";
import styled from "styled-components";

// GenericPrimaryButton
// A nice green button with some text and an event handler

export class GenericPrimaryButton extends React.Component {
    render() {
        return (
            <StyledButton 
                className={this.props.className} 
                onClick={this.props.clickHandler}
            >
                {this.props.text}
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
    height: 2rem;
    width: 8rem;
    background-color: #009700;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: #02b602;
    }
`;