import React from 'react'
import ReactDom from 'react-dom'
import {ProductsList} from './Products-list'
import {Cart} from './Cart'

import './index.css'

const App = () => {
  return (
    // <ProductsList/>
    <Cart/>
  )
}

ReactDom.render(<App/>, document.getElementById('root'));
