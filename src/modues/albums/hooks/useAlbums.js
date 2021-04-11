import {getAlbums} from "../services/albumsServices";
import {useCallback, useEffect, useState} from "react";

export function useAlbums() {
    const [albumsList, setAlbumsList] = useState([]);
    const [getIsLoading, setGetIsLoading] = useState(false);

    const getAlbumsData = useCallback(() => {
        setGetIsLoading(true)
        getAlbums().then(({data}) => {
            setAlbumsList(data)
            setGetIsLoading(false)
        })

    }, [setAlbumsList])// eslint-disable-line react-hooks/exhaustive-deps


    useEffect(getAlbumsData, [setAlbumsList])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        albumsList,
        getAlbumsData: {
            getAlbumsData,
            getIsLoading
        },

    }
}


