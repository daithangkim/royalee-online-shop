import React from 'react';
import {ShoppingCart} from "@mui/icons-material";
import {Button} from "@mui/material";

const ShoppingCartButton = () => {
    return (
        <Button>
            <ShoppingCart sx={{fontSize: '2rem'}} />
        </Button>
    );
};

export default ShoppingCartButton;
