import React, { Component } from 'react'
import {
  Route
} from "react-router-dom";

import Cart from './Cart'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="main">
        <Route path="/cart" render={(props) => <Cart client={this.props.client} {...this.props} {...props} />} />
      </div>
    )
  }
}
