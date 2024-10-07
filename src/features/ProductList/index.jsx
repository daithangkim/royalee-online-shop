import React from 'react';
import ProductList from "./components/ProductList";
import {bestsellerProducts, homeProducts} from "../../assets/Product/ProductDataBase";


const ProductListFeature = ({ tabKey }) => {
    let products = [];

    switch (tabKey) {
        case 'home':
            products = homeProducts.concat(bestsellerProducts);
            break;
        case 'bestseller':
            products = bestsellerProducts;
            break;
        case 'newProducts':
            //todo: new 'ProductDataBase' for new
            products = homeProducts;
        default:
            break;
    }

    return (
        <div>
            <ProductList products={products} />
        </div>
    );
};

export default ProductListFeature;
