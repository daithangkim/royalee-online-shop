import { Button } from "@mui/material";

const AddToCartButton = ({ onAddToCart }) => {
    return (
        <Button
            onClick={onAddToCart}
            variant="contained"
            sx={{ margin: '20px',
                bgcolor: '#9c7945',
                '&:hover': {
                    backgroundColor: 'rgba(156,121,69,0.85)',
                }}}
        >
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;
