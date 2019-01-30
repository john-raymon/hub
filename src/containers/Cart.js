import React, { Component, Fragment } from 'react'
import Velocity from 'velocity-animate'
import { Link } from 'react-router-dom'

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
        <div className="flex flex-row items-center py1">
          <div className="Cart__list-item-image-container col col-6 md:col-4">
            <img src={item.variant.image.src} width="100%" height="auto"/>
          </div>
          <div className="flex flex-col col col-6 md:col-8 justify-center">
            <div class="flex flex-row items-center justify-center small-text py_5 color-gray no-letter-spacing">
              <button className="bg-color-none pointer color-gray-wash px2 small-text no-letter-spacing" onClick={this.onSubtract}>
                -
              </button>
              <span class="px_25 regular-text color-gray-wash no-letter-spacing">
                { item.quantity }
              </span>
              <button className="bg-color-none pointer color-gray-wash px2 small-text no-letter-spacing" onClick={this.onAdd}>
                +
              </button>
            </div>
            <p class="regular-text color-gray-wash text-center col-10 py_25 mxauto">
              { item.title }
            </p>
            <button className="Button__container Button__container--all-gray uppercase nav-link-text mxauto my_5 bg-color-none">
              remove from cart
            </button>
          </div>
        </div>
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

            <div className="relative maxw60 w100 mxauto px2 mt2" style={{height: "auto", minHeight:"100vh"}}>
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
