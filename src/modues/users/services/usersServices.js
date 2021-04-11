import {USERS_API_URL} from "../constants";
import apiUsers from "../../../apiUsers";

export const getUsersList = () => {
    return apiUsers.get(USERS_API_URL)
}
export const addUser = (user) => {
    return apiUsers.post(USERS_API_URL, user)
}
export const updateUser = (user) => {
    return apiUsers.put(USERS_API_URL + '/' + user.id, user)
}

export const removeUser = (user) => {
    return apiUsers.delete(USERS_API_URL + '/' + user.id)
}