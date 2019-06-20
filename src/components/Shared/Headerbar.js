import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"

// HeaderBar
// The app-wide headerbar
// This should probably be a container instead of a component considering it contains business logic

export default class HeaderBar extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledLink className="asd" to="/messaging">Send Messages</StyledLink>
                <StyledLink to="/reporting">Reporting</StyledLink>
                <StyledLink to="/settings">Settings</StyledLink>
            </StyledContainer>
        )
    }
}

const StyledContainer = styled.div`
    width: 100%;
    height: 5rem;
    background-color: black;
    display: flex;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    color: grey;
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;

    cursor: pointer;

    &:hover {
        color: lightgray;
    }
`;
