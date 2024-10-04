import React from "react";
import {AppBar, Box, Button, Typography} from "@mui/material";

const Footer = () => {
    return (
        <div>
            <AppBar position="static" sx={{backgroundColor: '#020c23', padding: '16px'}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="body2" color="white" sx={{marginRight: 2}}>
                        © 2024 Royalee, Germany
                    </Typography>
                    <Typography variant="body2" color="white">
                        Established 2024
                    </Typography>
                </Box>
            </AppBar>
        </div>
    );
};

export default Footer;
