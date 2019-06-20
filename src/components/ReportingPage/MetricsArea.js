import React from "react";
import styled from "styled-components";
import Metric from "./Metric";
import CloudIcon from "@material-ui/icons/Cloud";
import TickIcon from "@material-ui/icons/Check";
import MailIcon from "@material-ui/icons/Email"
import WarningIcon from "@material-ui/icons/Warning"

// MetricsArea
// Component container for Metrics elements
// Basically just a glorified div

export class MetricsArea extends React.Component {
    render() {
        return (
            <StyledContainer>
                <Metric 
                    icon={<CloudIcon />}
                    number={this.props.data["total"]}
                    text="Total Outgoing Messages"
                />
                <Metric 
                    icon={<TickIcon />}
                    number={this.props.data["delivered"]}
                    text="Delivered"
                    colour={"green"}
                />
                <Metric 
                    icon={<MailIcon />}
                    number={this.props.data["sent"]}
                    text="Sent"
                    colour={"forestgreen"}
                />
                <Metric 
                    icon={<WarningIcon />}
                    number={this.props.data["undelivered"]}
                    text="Undelivered"
                    colour={"orange"}
                />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;