import React from "react";
import { APIKeyTable } from "../../components/SettingsPage/APIKeyTable";
import { connect } from "react-redux";
import { removeAPIKeyByName } from "../../redux/actions";

const mapStateToProps = state => ({
    apiKeys: state.apiKeys
});

const mapDispatchToProps = dispatch => ({
    removeAPIKeyByName: name => dispatch(removeAPIKeyByName(name))
})
        
// APIKeyTableContainer
// A container for the table that shows all the registered API keys

class APIKeyTableContainer extends React.Component {
    // When the user clicks the "delete" icon
    handleDelete = displayName => {
        // All we do at the moment is pass the event on to Redux
        // In the future we might do a check here, we might fire
        // an API call (e.g. tell some central system that we no longer have
        // access to the API key)
        this.props.removeAPIKeyByName(displayName);
    }

    render() {
        return (
            <APIKeyTable handleDelete={this.handleDelete} rows={this.props.apiKeys} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APIKeyTableContainer);