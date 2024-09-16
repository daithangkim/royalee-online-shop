import { useState } from "react";
import { Alert, Button, Card, CardActionArea, CardContent, CardMedia, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../ShoppingCard/redux/cartSlice";
import AddToCartButton from "./AddToCartButton";  // Reusable AddToCartButton component

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setOpenSnackbar(true);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Card>
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
