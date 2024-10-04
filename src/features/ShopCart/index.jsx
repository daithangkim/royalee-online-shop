import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartButton from "./components/ShoppingCartButton";
import ShoppingCart from "./components/ShoppingCart";

const ShoppingCartFeature = () => {
    const [cartOpen, setCartOpen] = useState(false); // State to control drawer visibility
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux

    // Count total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Function to toggle cart drawer open/close
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <>
            {/* Shopping Cart Button with total item count */}
            <ShoppingCartButton onClick={toggleCart} itemsCount={totalItems} />

            {/* Shopping Cart Drawer */}
            <ShoppingCart open={cartOpen} onClose={toggleCart} />
        </>
    );
};

export default ShoppingCartFeature;
