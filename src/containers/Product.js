import React, { Component, Fragment } from 'react'

class Product extends Component {
  constructor(props) {
    super(props)
    this.onAdd = this.onAdd.bind(this)
    this.onSubtract = this.onSubtract.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
    this.state = {
      quantity: 0
    }
  }
  onAdd(){
    const quantity = this.state.quantity + 1
    this.setState({
      quantity
    })
  }
  onSubtract() {
    if (this.state.quantity > 0) {
      const quantity = this.state.quantity - 1
      this.setState({
        quantity
      })
    }
  }
  addItemToCart() {
    const { product } = this.props
    const regularProduct = product.variants.find((variant) => {
      return variant.title.toLowerCase() !== "sample"
    })

    if (this.state.quantity > 0) {
      this.props.addItemToCart({
        variantId: regularProduct.id,
        quantity: this.state.quantity
      }).then((res) => {
        alert('Added to your cart!')
        this.setState({
          quantity: 0
        })
      }).catch((error) => {
        alert('Oops there was an error when attempting to add items to the your cart')
      })
    }
  }
  render() {
    const { product } = this.props
    const regularProduct = product.variants.find((variant) => {
      return variant.title.toLowerCase() !== "sample"
    })
    return (
      <div className="flex flex-col items-center justify-center p1 mr2">
        <div className="Collections__image-container">
          <img src={ regularProduct.image.src } width="100%" height="auto" />
        </div>
        <div className="Collections__controls-container maxw15 mt1 mxauto">
          <div class="flex flex-row items-center justify-center small-text py_5 color-gray no-letter-spacing">
            <button className="pointer color-gray-wash px2 small-text no-letter-spacing" onClick={this.onSubtract}>
              -
            </button>
            <span class="px_25">
              { this.state.quantity }
            </span>
            <button className="pointer color-gray-wash px2 small-text no-letter-spacing" onClick={this.onAdd}>
              +
            </button>
          </div>
          <button onClick={this.addItemToCart}>
            <p className="nav-link-text py_5 pointer border-color-yellow border-top px2">
              ADD TO CART
            </p>
          </button>
        </div>
      </div>
    )
  }
}

export default Product
