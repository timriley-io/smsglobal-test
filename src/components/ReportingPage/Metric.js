import React from "react";
import styled from "styled-components";

// Metric
// Shows an icon, a number, and some summary text
// Can change text colour based on props

export default class Metric extends React.Component {
    render() {
        return (
            <StyledContainer>
                <IconArea>
                    {this.props.icon}
                </IconArea>
                <TextArea colour={this.props.colour}>
                    <div>{this.props.number}</div>
                    <div>{this.props.text}</div>
                </TextArea>
            </StyledContainer>
        )
    }
}

const StyledContainer = styled.div`
    display: flex;
    height: 4rem;
    width: 20rem;
    border-bottom: 3px solid lightgray;
    padding: 0.5rem 0;
`;

const IconArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    color: grey;
`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    font-weight: 600;
    color: ${props => props.colour}
`;