import apiAlbums from '../../../apiAlbums'
import {ALBUM_API_URL} from "../constants";

export function getAlbum(albumId) {
    return apiAlbums.get(ALBUM_API_URL, {
        params: {
            albumId
        }
    })
}