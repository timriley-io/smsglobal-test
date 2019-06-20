import React from "react";
import Select from "react-select";
import styled from "styled-components";

// GenericDropdown
// Just a simple wrapper over the `react-select` dropdown component
// Wrote this because `react-select` deals with its data in
// {label: "asdasd", value: "sdfsdf"} format,
// which can become quite annoying to convert to/from
// especially if it's stored in the Redux store

export class GenericDropdown extends React.Component {
    // On change
    handleChange = obj => {
        // If the dropdown was cleared -> bubble the event with an empty array
        if (!obj) {
            this.props.handleChange([]);
        }
        // If the dropdown can have multiple items selected
        else if (this.props.isMulti) {
            // Map the selection objects to an array that just stores the label (what's displayed in the UI)
            this.props.handleChange(obj.map(el => el.label))
        }
        // If a single selection was made -> bubble that element
        else {
            this.props.handleChange(obj.label)
        }        
    }

    render() {
        return (
            <StyledSelect 
                isMulti={this.props.isMulti}
                name={this.props.name}
                //Convert between nice plain arrays and the `react-select` sytax
                options={this.props.options.map(opt => ({ value: opt, label: opt }))} 
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
            />
        );
    }
}

const StyledSelect = styled(Select)`
    min-width: 25em;
    max-width: 25%;
    margin: 0.5rem 0;
`;
