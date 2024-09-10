import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import SearchBar from "../features/SearchBar";
import ShoppingCartFeature from "../features/ShoppingCard";
import ProfileButton from "../features/Profile/ProfileButton/ProfileButton";
import LogoFeature from "../features/Logo/LogoFeature"

const Header = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#020c23'}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
                <LogoFeature/>
                <Box display="flex" gap={0} variant="contained" >
                    <SearchBar/>
                </Box>
                <Box>
                    <ProfileButton/>
                    <ShoppingCartFeature/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
