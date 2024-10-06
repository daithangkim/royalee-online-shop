import React from "react";
import {AppBar, Box, Toolbar, useMediaQuery} from "@mui/material";
import SearchBar from "../features/SearchBar";
import Index from "../features/Profile/components";
import LogoFeature from "../features/Logo/LogoFeature";
import './header.css';
import ShoppingCartFeature from "../features/ShopCart";


const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width: 32rem)'); // max-width of 512px
    return (
        <AppBar position="static" sx={{backgroundColor: '#020c23'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px'}}>
                <LogoFeature/>
                <Box display="flex" gap={0} variant="contained" sx={{flexGrow: '1'}}>
                    <SearchBar/>
                </Box>
                <Box sx={{flexBasis: '8.5rem', minWidth: '8.5rem'}}>
                    <Index/>
                    <ShoppingCartFeature/>
                </Box>
            </Toolbar>
        </AppBar>);
};

export default Header;
