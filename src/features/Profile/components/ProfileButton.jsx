import React from 'react';
import { Avatar, Button } from "@mui/material";

const ProfileButton = () => {
    return (
        <Button size={'small'}>
            <Avatar sx={{ bgcolor: '#9c7945',
                '&:hover': {
                    backgroundColor: 'rgba(156,121,69,0.85)',
                }}}></Avatar>
        </Button>
    );
}

export default ProfileButton;
