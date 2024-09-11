import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

const ShoppingCartButton = () => {
    return (
        <Button
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(156,121,69,0.85)',
                },
                // Add any other default styles here if needed
            }}
        >
            <ShoppingCart sx={{ fontSize: '2rem', color: 'white' }} />
        </Button>
    );
};

export default ShoppingCartButton;
