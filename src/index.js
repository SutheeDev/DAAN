import React from 'react'
import ReactDom from 'react-dom'
import {ProductsList} from './Products-list'
import {CartSection} from './Cart'
import {Header} from './Header'
import {Footer} from './Footer'

import './index.css'

const App = () => {
  return (
    <>
      <Header/>
      <ProductsList/>
      <CartSection/>
      <Footer/>
    </>
  )
}

ReactDom.render(<App/>, document.getElementById('root'));
