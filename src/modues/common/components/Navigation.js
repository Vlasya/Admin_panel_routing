import React, {useState} from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {BottomNavigationAction} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';


export function Navigation() {
    const pathname = window.location.pathname;// in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = useState(pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label='Dashboard' value='/' icon={<HomeIcon/>} component={Link} to='/dashboard'/>
            <BottomNavigationAction label='Users' value='/users' icon={<PersonIcon/>} component={Link} to='/users'/>
            <BottomNavigationAction label='Albums' value='/albums' icon={<PhotoAlbumIcon/>} component={Link}
                                    to='/albums'/>
        </BottomNavigation>
    )
}

