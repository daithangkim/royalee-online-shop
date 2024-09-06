import React from "react";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import Logo from "./Logo";
import SearchBar from "../features/SearchBar";
import ShoppingCartFeature from "../features/ShoppingCard";
import ProfileButton from "../features/Profile/ProfileButton/ProfileButton";

const Header = () => {
    return (
        <React.Fragment>
            {/*top appbar*/}
            <AppBar position="static" sx={{backgroundColor: '#020c23'}}>
                <Toolbar sx={{display: 'flex', lineHeight: '4', justifyContent: 'space-between'}}>
                    <Logo/>
                    <SearchBar/>
                    <ProfileButton/>
                    <ShoppingCartFeature/>
                </Toolbar>
            </AppBar>

            {/*bottom appbar*/}
            <AppBar position="static" sx={{backgroundColor: 'rgb(5,20,54)', lineHeight: '0.7'}}>
                {/* Buttons */}
                <Box sx={{display: 'flex', gap: 0.5}}>
                    {['Categories', 'Bestseller', 'New Products', 'Contact'].map((text, index) => (
                        <Button key={index} color="inherit" sx={{fontSize: '0.6rem', minWidth: 'auto'}}>
                            {text}
                        </Button>
                    ))}
                </Box>


            </AppBar>


        </React.Fragment>
    );
};

export default Header;
