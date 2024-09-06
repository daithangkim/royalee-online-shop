import React from 'react';
import {Box, Button} from "@mui/material";
import RoyalShopLogo from './RoyalShopLogo.png'
const Logo = () => {
    return (
        <Box display="flex" alignItems="center">
            <img
                src={RoyalShopLogo}
                alt="RoyalShop logo"
                style={{
                    cursor: 'pointer',
                    height: '50px',
                    width: '100%',
                    lineHeight:'5'
                }}
            />
        </Box>
    );
};

export default Logo;
