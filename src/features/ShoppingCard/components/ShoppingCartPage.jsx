import React from 'react';
import { Drawer, IconButton, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const ShoppingCartPage = ({ open, onClose }) => {
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { width: 300, padding: 2 } }}
        >
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16 }}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" gutterBottom>
                Shopping Cart
            </Typography>
            <List>
                <Typography>Under Construction</Typography>
                <ListItem>
                    <ListItemText primary="Item 1" secondary="$10.00" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Item 2" secondary="$20.00" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Item 3" secondary="$30.00" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default ShoppingCartPage;
