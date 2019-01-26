import React, { Component, Fragment } from 'react'
import Velocity from 'velocity-animate'

import Loading from './../views/Loading'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.cartRef = React.createRef();
  }
  componentDidMount() {

    Velocity(this.cartRef.current, {
        height: "500px"
    }, {
        duration: 300,
        easing: "ease-in-out",
    });
  }
  componentWillUnmount(){
    Velocity(this.cartRef.current, {
        height: "0px"
    }, {
        duration: 400,
        easing: "ease-in-out",
    });
  }
  render() {
    return (
      <div className="Cart fixed z3 t0 l0 w100 bg-color-white-wash" ref={this.cartRef}>
        { this.props.init ?
        (<Fragment>
          <p className="sticky t0 w100 color-gray nav-link-text">
          Shopping Cart
          </p>

          <div className="relative w100 t0 l0 b0 r0" style={{height: "4000px"}}>
          </div>
          <a href={`${this.props.checkout.webUrl}`} className="no-decoration">
            <div className="sticky w100 py2 px1 bg-color-black color-yellow text-center b0 pointer">
              <p className="nav-link-text">CHECKOUT</p>
              { this.props.checkout.webURL}
            </div>
          </a>
        </Fragment>
        )
        : ( <Loading /> )
        }
      </div>
    )
  }
}
