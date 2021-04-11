import React from 'react';
import {useAlbum} from "../../hooks/useAlbum";
import {CircularProgress, Grid} from "@material-ui/core/";
import {AlbumList} from "./AlbumList";
import {useParams} from 'react-router-dom'


export function AlbumPage() {
    const {albumId} = useParams()
    const {album, albumIsLoading} = useAlbum(albumId)

    return (
        <Grid container
              justify='center'
              alignItems='center'
        >
            {albumIsLoading ? <CircularProgress/> : <AlbumList albumData={album}/>}
        </Grid>
    );
}

