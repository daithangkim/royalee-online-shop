import React from 'react';
import { Button } from "@mui/material";
import RoyalShopLogo from '../assets/Logo/RoyalShopLogo.png';
import RoyalShopLogo2 from '../assets/Logo/img.png';


const Logo = ({ onLogoClick }) => {
    return (
        <Button onClick={onLogoClick} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={RoyalShopLogo}
                alt="RoyalShop logo"
                style={{
                    cursor: 'pointer',
                    height: '50px',
                    width: '100%',
                    lineHeight: '5'
                }}
            />
        </Button>
    );
};

export default Logo;
