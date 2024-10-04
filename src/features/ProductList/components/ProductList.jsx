import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <Container>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid
                        item
                        xs={12} sm={6} md={4} lg={3}
                        key={product.id}
                        sx={{ display: 'flex' }}
                    >
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
