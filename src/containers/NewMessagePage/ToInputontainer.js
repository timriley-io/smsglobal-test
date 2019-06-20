import React from "react";
import { GenericDropdown } from "../../components/Shared/GenericDropdown";
import { connect } from "react-redux"; 
import { setNewMessageTo } from "../../redux/actions";

// These are here instead of in the Redux store because
// at the moment they're not relevant to the rest of the application
const opts = [
    "8923749823",
    "0928387409",
    "0402709870",
    "Customer Group A",
    "Some Other Group",
    "90283490323"
]

const mapDispatchToProps = dispatch => ({
    setNewMessageTo: to => dispatch(setNewMessageTo(to))
})
        
// ToInputContainer
// A container for the `to` input field
// Again, this is separate from the `from` container
// because in the future we might want to add some specific
// business logic here

class ToInputContainer extends React.Component {

    componentDidMount = () => {
        // When the component mounts we might want
        // to async fetch a list of people we can send messages to
        // e.g. We might have an endpoint which gives us the latest
        // marketing lists
    }

    handleChange = e => {
        // Might do some checks here in the future
        // For now just update the value in the store
        this.props.setNewMessageTo(e);
    }

    render() {
        return (
            <GenericDropdown 
                placeholder={"Select Recipient(s)"}
                handleChange={this.handleChange} 
                isMulti={true} 
                options={opts} 
            />
        );
    }
}

export default connect(null, mapDispatchToProps) (ToInputContainer);