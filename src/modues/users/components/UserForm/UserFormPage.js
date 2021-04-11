import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {UserForm} from "./UserForm";
import {useUsers} from "../../hooks/useUsers";

const editUser = {
    name: '',
    phone: '',
    email: ''
}

export function UserFormPage(props) {
    const history = useHistory()
    const {saveUser:{saveUser}}=useUsers()

    const [user, setUser] = useState(editUser);
    // Проверяем есть ли юзер в props.location.state  и устанавливаем состояние
    useEffect(() => {
        props.location.state !== undefined && props.location.state.row && setUser(props.location.state.row)
    }, [props.location.state])

    function onChangeValue(e) {
        setUser({
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    function onSave(user){
        saveUser(user)
    }
    function onCloseForm() {
        history.push('/users')
    }

    return (
        <UserForm user={user} onChangeValue={onChangeValue} onCloseForm={onCloseForm} onSave={onSave}/>
    );
}

