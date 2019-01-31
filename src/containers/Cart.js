import React, { Component, Fragment } from 'react'
import Velocity from 'velocity-animate'
import { Link } from 'react-router-dom'

import ProductDetail from './ProductDetail'
import CartItem from './CartItem'
import Loading from './../views/Loading'
import CloseIcon from './../views/CloseIcon'

import cartImage from './../assets/images/cart-image.png'

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
        <CartItem key={key} item={item} removeCartItem={this.props.removeCartItem} updateCartItem={this.props.updateCartItem} />
      )})

    return (
      <div className="Cart fixed z3 t0 l0 w100 bg-color-white-wash" ref={this.cartRef} style={{ top: "-200%", height: "100vh" }} >
        {
          this.props.init ?
          (<Fragment>
            <div className="sticky t0 mxauto w100 z1">
              <div className="flex flex-row items-center px2 py1 justify-between bg-color-yellow">
                <p className="color-black nav-link-text nav-link-text--larger">
                  Shopping Cart
                </p>
                <Link to="/">
                  <div className="CloseIcon">
                    <CloseIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row items-center px2 py1 bg-color-white-wash justify-center items-center box-shadow">
              <p className="nav-link-text color-black">
                <span className="">Total: </span>
                 USD ${this.props.checkout.totalPrice}
              </p>
              </div>
            </div>

            <div className={'relative maxw60 w100 mxauto px2 ' +  (lineItems.length > 0 && 'py2')} style={{height: "auto", minHeight:"37rem"}}>
              { lineItems }
              { lineItems.length === 0 ? (
                <Fragment>
                  <Link to="/">
                    <p className="px2 mt3 text-center nav-link-text color-black">
                      Your cart is empty.
                      <br />
                      <span className="color-purple text-center">
                        Start discovering.
                      </span>
                    </p>
                    <div className="w100 mt2 maxw30 mxauto px1">
                      <img src={cartImage} width="100%" height="auto" />
                    </div>
                  </Link>
                </Fragment>
              ) :``
              (<p className="nav-link-text text-center color-black-wash px2 py2 border-top border-color-black-wash">
                Shipping and Taxes will be calculated during checkout.
              </p>)
            }
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
