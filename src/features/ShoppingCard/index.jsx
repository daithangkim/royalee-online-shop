import React, {useState} from 'react'
import ShoppingCartButton from "./components/ShoppingCartButton";
import ShoppingCartPage from "./components/ShoppingCartPage";

const ShoppingCartFeature = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const handleOpenCart = () => setCartOpen(true);
    const handleCloseCart = () => setCartOpen(false);

    return (<div>
            <ShoppingCartButton onClick={handleOpenCart}/>
            <ShoppingCartPage open={cartOpen} onClose={handleCloseCart}/>
        </div>);
}
export default ShoppingCartFeature
