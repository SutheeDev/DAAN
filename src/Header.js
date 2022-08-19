import React from 'react'

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-nav-links'>
                <h3 className="logo">
                    Dawn
                </h3>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Bags</a>
                            <svg className='down-arrow' aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 10 6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <a href="#">Shoes</a>
                            <svg className='down-arrow' aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 10 6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <a href="#">Lookbook</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='header-icons'>
                <span className='search'>
                    <svg className='search-icon' aria-hidden="true" focusable="false" role="presentation">
                    </svg>
                </span>
                <span className='client'>
                    <svg className='client-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" fill="none" viewBox="0 0 18 19">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
                    </path></svg>
                </span>
                <span className='bog'>
                    <svg className="bag-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
                    </svg>
                    <div className="item-amount">2</div>
                </span>
            </div>
        </header>
    )
};