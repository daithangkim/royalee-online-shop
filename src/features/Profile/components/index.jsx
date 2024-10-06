import React from 'react';
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Index = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Button size={'small'} component={Link} to={isLoggedIn ? '/profilePage' : '/register'}>
            <Avatar
                sx={{
                    bgcolor: '#9c7945',
                    '&:hover': {
                        backgroundColor: 'rgba(156,121,69,0.85)',
                    }
                }}>
            </Avatar>
        </Button>
    );
}

export default Index;
