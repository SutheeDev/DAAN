import React from 'react'

export const Cart = () => {
    return (
        <article className='cart'>
            <div className="your-cart">
                <h3>Your cart</h3>
                <a href="#">Continue shopping</a>
            </div>
            <div className="cart-header">
                <p>Product</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className="cart-container">
                <div className="item-container">
                    <img src="" alt="" />
                    <div className="item-info"></div>
                    <div className="item-quantity"></div>
                    <p className='item-price'>$390.00</p>
                </div>
            </div>
        </article>
    )
};

