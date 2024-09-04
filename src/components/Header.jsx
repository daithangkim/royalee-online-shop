import React from "react";
import {AppBar, Button, Toolbar} from "@mui/material";

const Header = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    {/*Buttons that link to different links*/}
                    {['Categories', 'Bestseller', 'New Products','Contact'].map((text, index) => (
                        <Button key={index} color="inherit">
                            {text}
                        </Button>))}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
 