import React, { Component } from 'react'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.onAdd = this.onAdd.bind(this)
    this.onSubtract = this.onSubtract.bind(this)
  }
  onAdd(){
    const { quantity:oldQuantity, id, variant } = this.props.item
    const { id:variantId } = variant
    const quantity = oldQuantity + 1
    this.props.updateCartItem({quantity,id,variantId})
  }
  onSubtract() {
    const { quantity:oldQuantity, id, variant } = this.props.item
    const { id:variantId } = variant
    const quantity = oldQuantity - 1
    this.props.updateCartItem({quantity,id,variantId})
  }
  render() {
    const { item } = this.props
    return(
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
          <button onClick={() => this.props.removeCartItem(item.id)} className="Button__container Button__container--all-gray uppercase nav-link-text mxauto my1 bg-color-none">
            remove from cart
          </button>
        </div>
      </div>
    )
  }
}

export default CartItem
