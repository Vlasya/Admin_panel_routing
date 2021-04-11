import apiAlbums from '../../../apiAlbums'
import {ALBUMS_API_URL} from "../constants";

export function getAlbums() {
    return apiAlbums.get(ALBUMS_API_URL)
}

