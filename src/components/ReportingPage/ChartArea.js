import React from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    makeVisFlexible,
    DiscreteColorLegend
} from "react-vis";
import "react-vis/dist/style.css";


// ChartArea
// Contains a (stacked) bar chart

// (Somewhat) reposonsive version of a regular XY Plot
const Flexi = makeVisFlexible(XYPlot);

export class ChartArea extends React.Component {
    render() {
        return (
            <Flexi 
                // Ordinal = library won't try and convert the x values to numeric types
                xType="ordinal"
                stackBy="y"
            >
                <DiscreteColorLegend 
                    // Use the message status as the labels/stacks
                    items={
                        Object.keys(this.props.data).map(d => ({ title: d }))
                    }
                    orientation="horizontal"
                    height={200}
                />
                <HorizontalGridLines />
                <XAxis 
                    // Use the date of the messages as the group/label
                    tickFormat={v => new Date(v).toDateString()} 
                    tickTotal={this.props.data.length} 
                    position="start"
                />
                <YAxis />
                {
                    // Use the message status at the stacks
                    Object.keys(this.props.data).map((d, idx) => {
                        return <VerticalBarSeries key={idx} data={this.props.data[d]} />
                    })
                }

            </Flexi>  
        )
    }
}
