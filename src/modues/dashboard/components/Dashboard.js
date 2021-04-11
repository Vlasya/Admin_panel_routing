import React, {useState} from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

export function Dashboard() {
    const [value, setValue] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label='Go to Users' component={Link} icon={<PersonIcon/>} to='/users'
                                    value='/users'/>
            <BottomNavigationAction label='Go to Albums' component={Link} icon={<PhotoAlbumIcon/>} to='/albums'
                                    value='/albums'/>
        </BottomNavigation>
    )
}

