import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

// APIKeyTable
// The table that displays the API Keys
// Using material-ui here instead of ag-grid because
// it looks cleaner (and to show I've used more than just one table library)

export class APIKeyTable extends React.Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Display Name</TableCell>
                            <TableCell>API Key</TableCell>
                            <TableCell>API Secret</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Display all the rows in our props */}
                        {this.props.rows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.displayName}</TableCell>
                                <TableCell>{row.key}</TableCell>
                                <TableCell>{row.secret}</TableCell>
                                <TableCell><DeleteIcon onClick={e => this.props.handleDelete(row.displayName)} />{/*<EditIcon />*/}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}