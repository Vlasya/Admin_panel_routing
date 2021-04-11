import React from 'react';
import {useAlbums} from "../../hooks/useAlbums";
import {CircularProgress, Grid} from "@material-ui/core";
import {AlbumsList} from "./AlbumsList";

export function AlbumsListPage() {
    const {getAlbumsData: {getIsLoading}, albumsList} = useAlbums()

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
        >
            {getIsLoading ? <CircularProgress/> : <AlbumsList albumsData={albumsList}/>}
        </Grid>
    );
}

