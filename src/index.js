import React from 'react'
import ReactDom from 'react-dom'
import {ProductsList} from './Products-list'

const App = () => {
  return (
    <ProductsList/>
  )
}

ReactDom.render(<App/>, document.getElementById('root'));
