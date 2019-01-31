import React, { Component } from 'react'
import {
  Route
} from "react-router-dom";

import Collections from './../views/Collections'

import Cart from './Cart'
import ProductDetail from './ProductDetail'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="main">
        <Route path="/cart" render={(props) => <Cart client={this.props.client} {...this.props} {...props} />} />
        <Route path="/chips/:productId/:variantId"
          render={
            (props) =>
            <ProductDetail
              client={this.props.client}
              fetchProduct={this.props.fetchProduct}
              {...this.props}
              {...props} />
           }
        />
        {
          this.props.initProducts &&
          (<Collections collections={this.props.collections} {...this.props}/>)
        }
        {
          this.props.productsError && (<p>There was a problem loading the products :(</p>)
        }
      </div>
    )
  }
}
