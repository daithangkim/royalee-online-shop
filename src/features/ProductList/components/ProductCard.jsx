import {useState} from "react";
import {Alert, Card, CardContent, CardMedia, Snackbar} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import AddToCartButton from "./AddToCartButton";
import {addToCart} from "../../../redux/slices/cartSlice";

const ProductCard = ({product}) => {
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
        <Card
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.03)', // Slightly enlarge the card
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                }
            }}>

            <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    height="250"
                    sx={{objectFit: 'cover', width: '100%'}}
                />
                <CardContent>
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                </CardContent>
            </Link>
            <AddToCartButton onAddToCart={handleAddToCart}/>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleSnackbarClose} severity="info">
                    {`${product.name} has been added to your cart!`}
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default ProductCard;
