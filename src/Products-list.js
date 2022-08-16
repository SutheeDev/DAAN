import React from 'react'
import {products} from './products'

export const ProductsList = () => {
    return (
        <section>
            <SectionHeader/>
            <article className="productList">
                {products.map((product) => {
                    return <Product key={product.id} {...product}/>
                })}
            </article>
        </section>
    )
};
const Product = (props) => {
    const {productName, price, img1, img2} = props;
    return (
        <a className='product-container' href='https://themes.shopify.com/themes/dawn/styles/default/preview?surface_detail=free-themes&surface_inter_position=1&surface_intra_position=1&surface_type=collection'>
            <div className="images-container">
                <img className='product-images' src={img1} alt="" />
                <img className='product-images img-2' src={img2} alt="" />
            </div>
            <div className="product-info">
                <p className='product-name'>{productName}</p>
                <p className='price'>${price} CAD</p>
            </div>
        </a>
    )
};
const SectionHeader = () => {
    return (
        <article className='sectionHeader'>
            <h2>
            Products List
            </h2>
            <p>
                Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.
            </p>
        </article>
    )
}