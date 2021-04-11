import {useCallback, useEffect, useState} from 'react';
import {getUsersList, addUser, updateUser, removeUser} from "../services/usersServices";

export function useUsers() {
    const [userList, setUserList] = useState([]);
    const [listIsLoading, setListIsLoading] = useState(false);
    const [updateIsLoading, setUpdateIsLoading] = useState(false);
    const [deleteIsLoading, setDeleteIsLoading] = useState(false);

    const getUsers = useCallback(() => {
        setListIsLoading(true)
        getUsersList().then(({data}) => {
            setUserList(data)
            setListIsLoading(false)
        })
    }, [setUserList])

    const saveUser = useCallback((user) => {
        setUpdateIsLoading(true)
        if (user.id) {
            updateUser(user).then(({data}) => {
                setUserList((userList) => userList.map((item) => data.id === item.id ? data : item))
                setUpdateIsLoading(false)
            })
        } else {
            addUser(user).then(({data}) => {
                setUserList((userList) => [...userList, data])
                setUpdateIsLoading(false)
            })

        }
    }, [setUserList])

    const deleteUser = useCallback((user) => {
        setDeleteIsLoading(true)
        removeUser(user).then(() => {
            setUserList((userList) => userList.filter((item) => item.id !== user.id))
            setDeleteIsLoading(false)
        })
    }, [setUserList])

    useEffect(getUsers, [setUserList])// eslint-disable-line react-hooks/exhaustive-deps
    return {
        userList,
        listIsLoading,
        saveUser: {
            saveUser,
            updateIsLoading
        },
        deleteUser: {
            deleteUser,
            deleteIsLoading
        }
    }
}

