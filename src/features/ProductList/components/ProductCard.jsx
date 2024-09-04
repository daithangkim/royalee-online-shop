const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
