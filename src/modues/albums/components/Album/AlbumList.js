import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom'

export function AlbumList({albumData}) {
    const {goBack} = useHistory()

    function handleClick() {
        goBack()
    }

    return (
        <Container maxWidth='lg'>
            <Button color='secondary' variant="contained" onClick={handleClick}>Back</Button>
            <Grid container spacing={2}>
                {albumData.map((item) => (
                    <Grid item key={item.id} xs={6} md={3} xl={2}>
                        <Paper elevation={3}>
                            <img src={item.thumbnailUrl} alt={item.title}/>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

