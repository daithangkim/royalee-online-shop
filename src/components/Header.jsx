import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import Logo from "./Logo";
import SearchBar from "../features/SearchBar";
import ShoppingCartFeature from "../features/ShoppingCard";
import ProfileButton from "../features/Profile/ProfileButton/ProfileButton";

const Header = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#020c23'}}>
            <Toolbar sx={{display: 'flex', lineHeight: '4', justifyContent: 'space-between'}}>
                <Logo/>
                <SearchBar/>
                <Box>
                    <ProfileButton/>
                    <ShoppingCartFeature/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
