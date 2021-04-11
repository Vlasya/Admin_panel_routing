import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";

export function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    Admin_Panel
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

