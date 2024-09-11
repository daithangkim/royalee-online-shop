import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import homeProducts from '../../../assets/Product/ProductDataBase.jsx';

const ProductList = () => {
    return (
        <Container>
            <Grid container spacing={4}>

                {homeProducts.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
};

export default ProductList;
