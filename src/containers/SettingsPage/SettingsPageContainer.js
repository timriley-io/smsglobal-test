import React from "react";
import APIKeyTableContainer from "./APIKeyTableContainer";
import NewKeyButtonContainer from "./NewKeyButtonContainer";
import styled from "styled-components";
import NewAPIKeyModalContainer from "./NewAPIKeyModalContainer";

// SettingsPageContainer
// Container for everything on the `settings` page
// Doesn't really need to do anything because
// all of the components have their own redux-connected containers

export class SettingsPageContainer extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledButton />
                <APIKeyTableContainer />
                <NewAPIKeyModalContainer />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled(NewKeyButtonContainer)`
    margin-bottom: 2rem;
`;
