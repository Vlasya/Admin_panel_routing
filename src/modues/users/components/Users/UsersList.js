import React from 'react';
import Container from "@material-ui/core/Container";
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {UsersListItem} from "./UsersListItem";
import {Link, useRouteMatch} from "react-router-dom";

export function UsersList({userList, onDelete}) {
    const {url} = useRouteMatch()

    return (
        <Container maxWidth='lg'>
            <Box>
                <Link to={url + '/add'}>
                    <Button variant='contained' color='secondary'>Add new user</Button>
                </Link>
            </Box>
            <TableContainer component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>PHONE</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((row, index) => (
                            <UsersListItem key={row.id} row={row} index={index} url={url} onDelete={onDelete}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}

