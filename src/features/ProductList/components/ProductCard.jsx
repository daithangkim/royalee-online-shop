import { useState } from "react";
import { Alert, Button, Card, CardActionArea, CardContent, CardMedia, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../ShoppingCard/redux/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [openSnackbar, setOpenSnackbar] = useState(false);  // State to handle the Snackbar visibility

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setOpenSnackbar(true);  // Show the Snackbar when the item is added
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);  // Close the Snackbar
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
                <Button onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </CardActionArea>

            {/* Snackbar Alert */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}  // Automatically close after 3 seconds
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Show it at the top center
            >
                <Alert onClose={handleSnackbarClose} severity="info">
                    {`${product.name} has been added to your cart!`}
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default ProductCard;
