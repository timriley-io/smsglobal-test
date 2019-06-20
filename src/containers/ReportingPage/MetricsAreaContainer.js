import React from "react";
import { MetricsArea } from "../../components/ReportingPage/MetricsArea";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    messages: state.sentMessages
});

// MetricsAreaContainer
// A container for the area of the reporting page
// that shows the overall stats/metrics

class MetricsAreaContainer extends React.Component {
    render() {
        // The only states we're looking at for now
        let data = {
            "sent": 0,
            "delivered": 0,
            "undelivered": 0,
            "total": 0
        }
        
        // For each message
        // Check its state then update the appropriate counter
        for (let i = 0; i < this.props.messages.length; i++) {
            let m = this.props.messages[i];
            data.total++;
            data[m.status]++;
        }

        return (
            <MetricsArea data={data} />
        )
    }
}

export default connect(mapStateToProps) (MetricsAreaContainer);