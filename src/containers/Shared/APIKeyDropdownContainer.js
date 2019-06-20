import React from "react";
import { connect } from "react-redux";
import { GenericDropdown } from "../../components/Shared/GenericDropdown";

const mapStateToProps = state => ({
    apiKeys: state.apiKeys
})

// APIKeyDropdownContainer
// Container for the dropdown that lets the user select an API key

class APIKeyDropdownContainer extends React.Component {
    // On change hadnler
    handleChange = name => {
        // Might do some validation here in the future
        // e.g. does the account associated with this key have enough
        // balance to actually send an SMS?
        
        let key = this.props.apiKeys.find(obj => obj.displayName == name);
        this.props.handleChange(key);
    }

    render() {
        return (
            <GenericDropdown
                options={this.props.apiKeys.map(obj => obj.displayName)}
                handleChange={this.handleChange}
                placeholder={"Select API Key"}
            />
        );
    }
}

export default connect(mapStateToProps) (APIKeyDropdownContainer);