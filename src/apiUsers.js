import axios from "axios";
import {USERS_BASE_API} from "./constants";

export default axios.create({
    baseURL: USERS_BASE_API,
    headers: {
        'Content-Type': "application/json"
    }
})