import React from "react";
import { GenericPrimaryButton } from "../../components/Shared/GenericPrimaryButton";
import { connect } from "react-redux";
import { generateAuthHeader } from "../../helpers/auth";

const mapStateToProps = state => ({
    newMessageTo: state.newMessageTo,
    newMessageFrom: state.newMessageFrom,
    newMessageText: state.newMessageText,
    newMessageAPIKey: state.newMessageAPIKey
});

// SendButtonContainer
// Business logic container for the `send message` button

class SendButtonContainer extends React.Component {
    // On click
    clickHandler = () => {
        // Our REST API link
        let url = `https://api.smsglobal.com/v2/sms/`;

        // The API doesn't like if you give it an array of 1 recipient
        // so let's make sure if we only have 1 recipient that it's not in an array
        let to = this.props.newMessageTo;
        if (to.length == 1) {
            to = this.props.newMessageTo[0];
        }

        // API params
        // what we're doing, who from, where to, and what to send
        let opts = {
            action: "sendsms",
            origin: this.props.newMessageFrom,
            destination: to,
            message: this.props.newMessageText
        }

        // Generate the auth header (./src/helpers/auth.js)
        let auth = generateAuthHeader("POST", this.props.newMessageAPIKey);

        // POST the data
        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": auth,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(opts)
        }).then(res => {
            return res.json()
        }).then(json => {
            // Quick and dirty alert that the message sent OK
            // In prod I probably would be staying away from alert()
            if (json.messages && json.messages.length > 0) {
                alert("Message sent succesfully");
            }
        }).catch(err => {
            // If err -> tell use and print info
            alert("An error occurred, please check the console for more info.");
            console.log(err);
        });
    }

    render() {
        return (
            <GenericPrimaryButton clickHandler={this.clickHandler} text="Send Message" />
        )
    }
}

export default connect(mapStateToProps) (SendButtonContainer);