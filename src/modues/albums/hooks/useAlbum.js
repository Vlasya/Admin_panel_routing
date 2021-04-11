import {getAlbum} from "../services/photosServices";
import {useCallback, useEffect, useState} from "react";

export function useAlbum(albumId) {
    const [album, setAlbum] = useState([]);
    const [albumIsLoading, setAlbumIsLoading] = useState(false);

    const getAlbumData = useCallback(() => {
        setAlbumIsLoading(true)
        getAlbum(albumId).then(({data}) => {
            setAlbum(data)
            setAlbumIsLoading(false)
        })

    }, [setAlbum])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(getAlbumData, [setAlbum])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        album,
        albumIsLoading
    }
}