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
                <p className='total'>Total</p>
            </div>
            <div className="cart-container">
                <div className="item-container">
                    <img className='item-img' src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n1_360x.jpg?v=1637107143" alt="" />
                    <div className="item-info">
                        <p className="item-name">Bo Ivy</p>
                        <p className="item-price">$390.00</p>
                        <p className="item-color">Color: Emerald</p>
                    </div>
                    <div className="item-quantity">
                        <div className="item-amount">
                            <button className='decrease-btn'>-</button>
                            <p className="item-count">1</p>
                            <button className='increase-btn'>+</button>
                        </div>
                        <svg className='remove-item-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation">
                        <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p className='items-price'>$390.00</p>
                </div>
            </div>
            <div className="cart-container">
                <div className="item-container">
                    <img className='item-img' src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n1_360x.jpg?v=1637107143" alt="" />
                    <div className="item-info">
                        <p className="item-name">Bo Ivy</p>
                        <p className="item-price">$390.00</p>
                        <p className="item-color">Color: Emerald</p>
                    </div>
                    <div className="item-quantity">
                        <div className="item-amount">
                            <button className='decrease-btn'>-</button>
                            <p className="item-count">1</p>
                            <button className='increase-btn'>+</button>
                        </div>
                        <svg className='remove-item-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation">
                        <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p className='items-price'>$390.00</p>
                </div>
            </div>
            <div className="line"></div>
        </article>
    )
};

