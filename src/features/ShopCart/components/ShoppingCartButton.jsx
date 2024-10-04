import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, Button } from '@mui/material';

const ShoppingCartButton = ({ onClick, itemsCount }) => {
    // Format the item count
    const displayCount = itemsCount > 99 ? '99+' : itemsCount;

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
            {/* Badge to display the item count */}
            <Badge
                badgeContent={displayCount}
                color="secondary"
                showZero
                overlap="circular"
            >
                <ShoppingCart sx={{ fontSize: '2rem', color: 'white' }} />
            </Badge>
        </Button>
    );
};

export default ShoppingCartButton;
