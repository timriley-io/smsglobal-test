import React from "react";
import { connect } from "react-redux";
import { setNewAPIKeyModalVisible } from "../../redux/actions";
import { GenericPrimaryButton } from "../../components/Shared/GenericPrimaryButton";

const mapDispatchToProps = dispatch => ({
    setModalVisible: visible => dispatch(setNewAPIKeyModalVisible(visible))
});

// NewKeyButtonContainer
// Tiny contianer for the `Add New Key` button

class NewKeyButtonContainer extends React.Component {
    // If the button is clicked, open the modal
    clickHandler = () => {
        this.props.setModalVisible(true);
    }

    render() {
        return (
            <GenericPrimaryButton className={this.props.className} clickHandler={this.clickHandler} text="Add New API Key" />
        );
    }
}

export default connect(null, mapDispatchToProps) (NewKeyButtonContainer);
