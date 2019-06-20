import React from "react";
import { GenericDropdown } from "../../components/Shared/GenericDropdown";
import { connect } from "react-redux"; 
import { setNewMessageFrom } from "../../redux/actions";

const mapStateToProps = state => ({
    senders: state.senders
});

const mapDispatchToProps = dispatch => ({
    setNewMessageFrom: from => dispatch(setNewMessageFrom(from))
});

// FromInputContainer
// A container for the `from` input field
// The only reason this is seperate from the `to` container
// is so we can do filtering/checking/async pulling of a list
// of clients if we so desire

class FromInputContainer extends React.Component {
    // On change handler
    handleChange = e => {
        // Might do some error checking here in the future
        this.props.setNewMessageFrom(e);
    }

    render() {
        return (
            <GenericDropdown 
                placeholder={"Select Sender"}
                handleChange={this.handleChange} 
                options={this.props.senders} 
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FromInputContainer);