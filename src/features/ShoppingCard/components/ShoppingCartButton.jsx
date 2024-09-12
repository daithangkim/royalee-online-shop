import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

const ShoppingCartButton = ({ onClick }) => {
    return (
        <Button
            size={'small'}
            sx={{
                '&:hover': {
                    '& .MuiSvgIcon-root': {
                        fontSize: '2.2rem',
                    },
                },
            }}
            onClick={onClick}
        >
            <ShoppingCart sx={{ fontSize: '2rem', color: 'white' }} />
        </Button>
    );
};

export default ShoppingCartButton;
