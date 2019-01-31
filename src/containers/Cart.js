import React, { Component, Fragment } from 'react'
import Velocity from 'velocity-animate'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import Loading from './../views/Loading'
import CloseIcon from './../views/CloseIcon'

export default class Cart extends Component {

  constructor(props) {
    super(props)
    this.cartRef = React.createRef();
    this.onCheckoutClick = this.onCheckoutClick.bind(this)
  }

  componentDidMount() {

    Velocity(this.cartRef.current, {
        top: "0px"
    }, {
        duration: 500,
        easing: "ease-in-out",
    });
  }

  componentWillUnmount(){

    Velocity(this.cartRef.current, {
        top: "-200%"
    }, {
        duration: 500,
        easing: "ease-in-out",
    });
  }

  onCheckoutClick(e) {

    if (this.props.checkout.lineItems.length > 0) {
      return
    } else {
      e.preventDefault()
      alert('You must first add items to your cart before checking out.')
      return
    }
  }

  render() {

   let lineItems = this.props.checkout.lineItems.map((item, key) => {
      return (
        <CartItem key={key} item={item} />
      )})

    return (
      <div className="Cart fixed z3 t0 l0 w100 bg-color-white-wash" ref={this.cartRef} style={{ top: "-200%", height: "100vh" }} >
        {
          this.props.init ?
          (<Fragment>
            <div className="sticky t0 maxw60 mxauto w100 px2 pt3 flex flex-row items-center justify-between z1">
              <p className="color-black nav-link-text nav-link-text--larger">
                Shopping Cart
              </p>
              <Link to="/">
                <div className="CloseIcon">
                  <CloseIcon />
                </div>
              </Link>
            </div>

            <div className="relative maxw60 w100 mxauto px2 pt1 pb4" style={{height: "auto", minHeight:"100vh"}}>
              { lineItems }
            </div>
            <a href={`${this.props.checkout.webUrl}`} className="no-decoration" onClick={this.onCheckoutClick}>
              <div className="sticky w100 py2 px1 bg-color-black color-yellow text-center b0 pointer">
                <p className="nav-link-text">CHECKOUT</p>
              </div>
            </a>
          </Fragment>) :
          ( <Loading /> )
        }
      </div>
    )
  }
}
