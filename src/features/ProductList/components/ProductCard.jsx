import {Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        height="250"/>

      <CardContent>
        <h2>{product.name}</h2>
          <h3>{product.price}</h3>
        <p>{product.description}</p>
      </CardContent>

        <CardActionArea>
            <Button component={Link} to={`/product/${product.id}`}>Details</Button>
            <Button>Add to Cart</Button>
        </CardActionArea>

    </Card>
  );
};

export default ProductCard;
