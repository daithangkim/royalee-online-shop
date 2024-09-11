import React from 'react';
import { useParams } from 'react-router-dom';
import homeProducts from "../../../assets/Product/ProductDataBase";

//merging entire database of products
const products = homeProducts;

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <img src={product.image} alt={product.name} style={{ width: '300px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
        </div>
    );
};

export default ProductDetails;
