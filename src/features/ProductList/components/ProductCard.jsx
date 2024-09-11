import { Button, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert(`${product.name} has been added to your cart!`);  // Display alert
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
        </Card>
    );
};

export default ProductCard;
