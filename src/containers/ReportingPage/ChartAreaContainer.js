import React from "react";
import { ChartArea } from "../../components/ReportingPage/ChartArea";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    messages: state.sentMessages
});

// ChartAreaContainer
// Contains business logic for the chart

class ChartAreaContainer extends React.Component {
    constructor(props) {
        super(props);

        // Initialise empty state
        this.state = {
            data: []
        }
    }

    // Using getDerivedStateFromProps instead of componentDidMount
    // because it's very possible that in the future we'll have a socket
    // connection (or short/long polling :/) and want to update this table
    // in real time
    static getDerivedStateFromProps = (nextProps) => {
        // If we get some messages we need to display
        if (nextProps.messages.length > 0) {
            // We know our data will fit into these groups
            // (I'm sure there are more, but these are the only one I'm dealing with right now)
            var data = {
                "sent": [],
                "delivered": [],
                "undelivered": []
            };
            
            // For each message
            for (let i = nextProps.messages.length - 1; i >= 0; i--) {
                // Extract the data we need
                let msg = nextProps.messages[i];
                let msgDate = new Date(msg.dateTime);
                let msgDateStr = msgDate.toDateString();
                let msgStatus = msg.status;

                // (We store the messages by calendar day)
                // Is there an entry for the calendar day of this message?
                let dateInData = data[msgStatus].find(el => el.date == msgDateStr && el.status == msgStatus);

                // If there isn't, let's create one
                if (!dateInData) {
                    // We add the `data` field as well so we don't have to keep calling new Date()
                    data[msgStatus].push({ 
                        date: msgDateStr, 
                        x: new Date(msgDateStr).toDateString(), 
                        y: 1
                    });
                }
                // If there is, just increment the counter
                else {
                    dateInData.y++;
                }
            }

            // Return derived state
            return { data };
        }
        
        // If there are no messages, our state is empty
        return {};
    }
 
    render() {
        return (
            <StyledContainer>
                <ChartArea data={this.state.data} />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    width: 50%;
`;

export default connect(mapStateToProps) (ChartAreaContainer);