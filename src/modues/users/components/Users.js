import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {UsersListPage} from "./Users/UsersListPage";
import {UserFormPage} from "./UserForm/UserFormPage";

export function Users() {
    const {path} = useRouteMatch()
    return (
        <Switch>
            <Route path={path} exact component={UsersListPage}/>
            <Route path={path + '/add'} component={UserFormPage}/>
            <Route path={path + '/:idUser'} component={UserFormPage}/>
        </Switch>
    );
}

