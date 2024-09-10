import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import products from '../../../assets/Product/ProductDetails.jsx';

const ProductList = () => {
    return (
        <Container>
            <Grid container spacing={4}>

                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
};

export default ProductList;
