import React from 'react';
import {Grid} from "@material-ui/core";
import {AlbumsListItem} from "./AlbumsListItem";
import Container from "@material-ui/core/Container";

export function AlbumsList({albumsData}) {

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                {albumsData.map((item) => (
                    <Grid xs={12} md={6} key={item.id} item>
                        <AlbumsListItem item={item}/>
                    </Grid>))}
            </Grid>
        </Container>
    );
}

