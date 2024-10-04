// features/ProductList/ProductCard.jsx
import { useState } from "react";
import { Alert, Button, Card, CardActionArea, CardContent, CardMedia, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCartButton from "./AddToCartButton";
import {addToCart} from "../../../redux/slices/cartSlice";  // A separate reusable button component

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state to show confirmation

    const handleAddToCart = () => {
        dispatch(addToCart(product)); // Dispatch the addToCart action
        setOpenSnackbar(true); // Show the Snackbar when an item is added
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false); // Close Snackbar after a timeout or manually
    };

    return (
        <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between' }}>
            <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                height="250"
            />
            <CardContent>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
            </CardContent>

            <CardActionArea>
                <Button component={Link} to={`/product/${product.id}`}>
                    Details
                </Button>

                {/* Add To Cart Button */}
                <AddToCartButton onAddToCart={handleAddToCart} />
            </CardActionArea>

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
        </Card>
    );
};

export default ProductCard;
