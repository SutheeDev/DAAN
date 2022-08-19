import React from 'react'
import ReactDom from 'react-dom'
import {ProductsList} from './Products-list'
import {CartSection} from './Cart'
import {Header} from './Header'

import './index.css'

const App = () => {
  return (
    <>
      <Header/>
      <ProductsList/>
      <CartSection/>
    </>
  )
}

ReactDom.render(<App/>, document.getElementById('root'));
