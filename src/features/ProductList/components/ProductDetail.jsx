import React from 'react';
import { useParams } from 'react-router-dom';
import { homeProducts, bestsellerProducts } from "../../../assets/Product/ProductDataBase";

// Combine all product arrays into one
const allProducts = [...homeProducts, ...bestsellerProducts];

const ProductDetails = () => {
    const { id } = useParams();
    const product = allProducts.find(p => p.id === parseInt(id));

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
