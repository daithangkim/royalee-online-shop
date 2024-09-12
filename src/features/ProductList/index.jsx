import React from 'react';
import ProductList from "./components/ProductList";
import {bestsellerProducts, homeProducts} from "../../assets/Product/ProductDataBase";


const ProductListFeature = ({ tabIndex }) => {
    let products = [];

    switch (tabIndex) {
        case 0:
            products = homeProducts.concat(bestsellerProducts);
            break;
        case 1:
            products = bestsellerProducts;
            break;
        case 2:
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
