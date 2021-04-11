import React from 'react';
import {Button, TableCell, TableRow} from "@material-ui/core";
import {Link} from "react-router-dom";

export function UsersListItem({row, index, url, onDelete}) {

    function deleteUser(e) {
        onDelete(row)
    }

    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell><Button variant='contained' color='secondary' onClick={deleteUser}>Delete</Button></TableCell>
            <TableCell><Button variant='contained'>
                <Link to={{pathname: `${url}/${row.id}`, state: {row}}}>Edit</Link>
            </Button>
            </TableCell>
        </TableRow>
    );
}

