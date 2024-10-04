import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { homeProducts, bestsellerProducts } from "../../../assets/Product/ProductDataBase";
import AddToCartButton from "./AddToCartButton";
import {Alert, Snackbar} from "@mui/material";
import {addToCart} from "../../../redux/slices/cartSlice";  // Import the reusable AddToCartButton

// Combine all product arrays into one
const allProducts = [...homeProducts, ...bestsellerProducts];

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setOpenSnackbar(true);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);  // Close Snackbar
    };

    return (
        <div>
            <h1>Product Details</h1>
            <img src={product.image} alt={product.name} style={{ width: '300px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>

            <AddToCartButton onAddToCart={handleAddToCart} />

            {openSnackbar && (
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleSnackbarClose} severity="info">
                        {`${product.name} has been added to your cart!`}
                    </Alert>
                </Snackbar>
            )}
        </div>
    );
};

export default ProductDetails;
