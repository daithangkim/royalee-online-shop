import React from 'react';

const ShoppingCartPage = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 50 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCartPage;
