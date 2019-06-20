import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css" ;
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import styled from "styled-components";

// SentMessagesTable
// Shows all the messages that have been sent via the API

// Define our col definitions here
// Don't need to be component state because they never change
const cols = [
    {
        headerName: "Date", 
        field: "date", 
        sortable: true, 
        filter: true,
        resizable: true
    },
    {
        headerName: "From", 
        field: "from", 
        sortable: true, 
        filter: true,
        resizable: true
    },
    {
        headerName: "To", 
        field: "to", 
        sortable: true, 
        filter: true,
        resizable: true
    },
    {
        headerName: "Message", 
        field: "message", 
        sortable: false, 
        filter: true,
        resizable: true
    },
    {
        headerName: "State", 
        field: "state", 
        sortable: true, 
        filter: true,
        resizable: true
    }
];


export class SentMessagesTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    // When the grid is ready, resize the columns to take advantage of full grid space
    onGridReady = params => {
        params.api.sizeColumnsToFit();
    }


    // On new props
    static getDerivedStateFromProps = nextProps => {
        // The only props this component will receive is an array of messages to display
        // so we don't need to check if the messages have changed

        // Format the data objects according to our col definitions
        let formattedMessages = nextProps.messages.map(m => ({
            date: m.dateTime,
            from: m.origin,
            to: m.destination,
            message: m.message,
            state: m.status
        }));

        // Return the derived state
        return { messages: formattedMessages};
    }

    render() {
        return (
            <StyledGridContainer className="ag-theme-balham">
                <AgGridReact
                        columnDefs={cols}
                        rowData={this.state.messages}
                        onGridReady={this.onGridReady}
                ></AgGridReact>
            </StyledGridContainer>
        );
    }
}

const StyledGridContainer = styled.div`
    height: 40%;
    width: 100%;
    margin-top: 5rem;
`;