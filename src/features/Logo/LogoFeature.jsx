import React from 'react';
import { Button } from "@mui/material";
import RoyalShopLogo from '../../assets/Logo/RoyalShopLogo.png';


const LogoFeature = ({ onLogoClick }) => {
    return (
        <Button onClick={onLogoClick} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={RoyalShopLogo}
                alt="RoyalShop logo"
                style={{
                    cursor: 'pointer',
                    height: 'auto',
                    width: '20vw',
                    maxWidth: '10rem',
                    lineHeight: '5'
                }}
            />
        </Button>
    );
};

export default LogoFeature;
