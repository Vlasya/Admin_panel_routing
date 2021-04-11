import React from 'react';
import {useUsers} from "../../hooks/useUsers";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {UsersList} from "./UsersList";

export function UsersListPage() {
    const {userList, listIsLoading, deleteUser: {deleteUser}} = useUsers()

    function onDelete(user) {
        deleteUser(user)
    }

    return (
        <Grid container
              justify='center'
              alignItems='center'
        >
            {listIsLoading ? <CircularProgress/> : <UsersList userList={userList} onDelete={onDelete}/>}
        </Grid>
    );
}

