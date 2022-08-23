import React from 'react'

export const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footer-container'>
                <section className="footer-nav-links">
                    <section className="quick-links">
                        <h2>Quick links</h2>
                        <ul className='footer-links'>
                            <li>
                                <a href="#" className='active'>Bags</a>
                            </li>
                            <li>
                                <a href="#">Shoes</a>
                            </li>
                            <li>
                                <a href="#">Lookbook</a>
                            </li>
                        </ul>
                    </section>
                    <section className="info">
                        <h2>Info</h2>
                        <ul className='footer-links'>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Shipping policy</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </section>
                    <section className="mission">
                        <h2>Our mission</h2>
                        <p>
                            Quality materials, good designs, craftsmanship and sustainability.
                        </p>
                    </section>
                </section>

                <section>
                    <form action='#'>
                        <label>Subscribe to our emails</label>
                        <div className="input-box">
                            <input type="email" placehodler='Email'/>
                            <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                            </path></svg>
                        </div>
                    </form>
                    <nav className='social-media'>
                        <ul className='social-links'>
                            <li>
                                <a href="#">
                                    a
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    a
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    a
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    a
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    a
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
        </footer>
    )
};