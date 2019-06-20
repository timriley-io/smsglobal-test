import React from "react";
import { SentMessagesTable } from "../../components/ReportingPage/SentMessagesTable";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    messages: state.sentMessages
});

// SentMessagesTableContainer
// Truth be told, this container probably doesn't need to exist
// We'll keep it around just incase we want to re-jig its parent
// container or child component, just to make things a bit easer

class SentMessagesTableContainer extends React.Component {
    render() {
        return (
            <SentMessagesTable messages={this.props.messages} />
        );
    }
}

export default connect(mapStateToProps) (SentMessagesTableContainer)