import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {Link, useRouteMatch} from 'react-router-dom'

export function AlbumsListItem({item}) {
    const {url} = useRouteMatch()
    return (
        <Paper color='primary' elevation={5}>
            <Typography
                align='center'
                color='secondary'
                display='block'
                variant='button'
            >
                <Link to={url + '/' + item.id}>{item.title}</Link>
            </Typography>
        </Paper>
    );
}

