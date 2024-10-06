import { Button } from "@mui/material";

const AddToCartButton = ({ onAddToCart }) => {
    return (
        <Button
            onClick={onAddToCart}
            variant="outlined"
            sx={{ margin: '16px' }}
        >
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;
