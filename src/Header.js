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
                            
                            <svg className='down-arrow' aria-hidden="true" focusable="false" role="presentation" viewBox="0.4 0.4 9.2 5.2" preserveAspectRatio="xMidYMid meet" height='5px'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                </path>
                            </svg>
                            
                        </li>
                        <li>
                            <a href="#">Shoes</a>
                            <svg className='down-arrow' aria-hidden="true" focusable="false" role="presentation" viewBox="0.4 0.4 9.2 5.2" preserveAspectRatio="xMidYMid meet" height='5px'>
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
                    <span>
                        <svg className='search-icon' viewBox='140 -20 310 630' width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M584.242 570.705 435.655 422.119c91.093-98.563 88.854-251.627-6.719-347.947C379.655 24.891 315.441 1 251.976 1c-63.469 0-128.427 24.64-176.96 73.172-98.563 98.563-98.563 257.6-.75 355.413 49.281 49.282 113.495 73.172 176.96 73.172 61.229 0 122.453-22.401 170.24-66.453l148.587 148.587c2.239 2.239 4.479 2.984 6.718 2.984 2.24 0 5.23-.745 6.719-2.984 4.485-3.735 4.485-10.453.75-14.188l.002.002Zm-333.014-87.36c-61.973 0-120.213-23.896-163.52-67.948-90.35-90.349-90.35-237.44 0-327.04C131.76 44.305 189.255 20.41 251.228 20.41c61.973 0 120.213 23.896 163.52 67.948 90.349 90.35 90.349 237.44 0 327.04-43.307 44.052-101.547 67.948-163.52 67.948Z" fill="#000" stroke="#000" stroke-linecap="round" stroke-dasharray="2 4 6 8"/></svg>
                    </span>
                </span>
                <span className='client'>
                    <svg className='client-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" fill="none" viewBox="0 0 18 19" height='23px' preserveAspectRatio="xMidYMid meet">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
                    </path></svg>
                </span>
                <span className='bag'>
                    <svg className="bag-icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="10.5 5 20 25" fill="none" height='30px' preserveAspectRatio="xMidYMid meet">
                    <path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
                    </svg>
                    <div className="item-amount">2</div>
                </span>
            </div>
        </header>
    )
};