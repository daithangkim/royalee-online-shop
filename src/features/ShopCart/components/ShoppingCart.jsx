import React from 'react';
import {Button, Drawer, IconButton, List, ListItem, ListItemText, Typography} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart, removeFromCart} from "../../../redux/slices/cartSlice";

const ShoppingCart = ({open, onClose}) => {
    //get cart items from state
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

// Dispatch remove action
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    //clear entire cart
    const handleClearCart = () => {
        dispatch(clearCart)
    }

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div style={{width: 300, padding: 20}}>
                <IconButton onClick={onClose} style={{float: 'right'}}>
                    <CloseIcon/>
                </IconButton>
                <Typography variant="h6" gutterBottom>
                    My Orders
                </Typography>
                {
                    cartItems.length === 0 ? (<Typography>Your cart is empty</Typography>) :
                    (<List>
                        {cartItems.map((item) => (<ListItem key={item.id} divider>
                            <ListItemText
                                primary={item.name}
                                secondary={`Quantity: ${item.quantity} | Price: ${item.price}`}
                            />

                            <Button
                                variant="contained"
                                onClick={() => handleRemoveFromCart(item)}
                            >
                                Remove
                            </Button>
                        </ListItem>))}
                    </List>)
                }
            </div>
        </Drawer>
    );
}


export default ShoppingCart;
