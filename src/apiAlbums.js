import axios from "axios";
import {ALBUMS_BASE_API} from "./constants";

export default axios.create({
        baseURL: ALBUMS_BASE_API,
        headers: {
            'Content-Type': 'application/json'
        }
    }
)