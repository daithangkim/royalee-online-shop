import React from 'react';
import { Avatar, Button } from "@mui/material";
import {Link} from "react-router-dom";

const ProfileButton = () => {
    return (
        <Button size={'small'}
                component={Link} to={'/user'}>
            <Avatar sx={{ bgcolor: '#9c7945',
                '&:hover': {
                    backgroundColor: 'rgba(156,121,69,0.85)',
                }}}></Avatar>
        </Button>
    );
}

export default ProfileButton;
