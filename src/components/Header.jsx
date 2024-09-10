import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import Logo from "./Logo";
import SearchBar from "../features/SearchBar";
import ShoppingCartFeature from "../features/ShoppingCard";
import ProfileButton from "../features/Profile/ProfileButton/ProfileButton";
import AllCategory from "../features/AllCategory/AllCategory";

const Header = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#020c23'}}>
            <Toolbar sx={{display: 'flex', lineHeight: '4', justifyContent: 'space-between'}}>
                <Logo/>
                <Box display="flex" gap={0} variant="contained">
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
