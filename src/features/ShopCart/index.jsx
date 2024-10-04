import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartButton from './components/ShoppingCartButton';
import ShoppingCart from './components/ShoppingCart';  // Import the ShoppingCart drawer

const ShoppingCartFeature = () => {
    const [cartOpen, setCartOpen] = useState(false);  // State to control drawer visibility
    const cartItems = useSelector((state) => state.cart.items);  // Get cart items from Redux

    // Function to toggle cart drawer open/close
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <>
            {/* Shopping Cart Button */}
            <ShoppingCartButton onClick={toggleCart} />

            {/* Shopping Cart Drawer */}
            <ShoppingCart open={cartOpen} onClose={toggleCart} itemsCount={cartItems} />
        </>
    );
};

export default ShoppingCartFeature;
