import { Button } from "@mui/material";

// Reusable AddToCartButton component
const AddToCartButton = ({ onAddToCart }) => {
    return (
        <Button onClick={onAddToCart} color="primary">
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;
