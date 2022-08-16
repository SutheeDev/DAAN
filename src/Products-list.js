import React from 'react'
import {products} from './products'

export const ProductsList = () => {
    return (
        <article className="productList">
            {products.map((product) => {
                const {productName, price, img1, img2} = product;
                return <Product key={product.id} {...product}/>
            })}
        </article>
        
    )
};

const Product = (props) => {
    const {productName, price, img1, img2} = props;
    return (
        <a className='product-container' href='#'>
            <img className='product-images' src={img1} alt="" />
            <p className='product-name'>{productName}</p>
            <p className='price'>${price} CAD</p>
        </a>
    )
};