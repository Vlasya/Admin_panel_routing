import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {AlbumsListPage} from "./AlbumsList/AlbumsListPage";
import {AlbumPage} from "./Album/AlbumPage";

export function Albums() {
    const {path} = useRouteMatch()
    return (
        <Switch>
            <Route path={path} exact component={AlbumsListPage}/>
            <Route path={path + '/:albumId'} component={AlbumPage}/>
        </Switch>
    );
}

