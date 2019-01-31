import React, {Component, Fragment} from 'react'

import Product from './Product'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      error: null,
      loading: false,
      variantProduct: null
    }
  }
  componentDidMount() {
   let { fetchProduct, match } = this.props
   const { params: {productId, variantId} } = match
   this.setState({
     loading: true
   })
   // attempt to fetch product
   fetchProduct(productId)
    .then((product) => {
      console.log('this is the product found', product)
      const variantProduct = product.variants.find((variant) => {
        return variant.id === variantId
      })
      this.setState({
        product: product,
        variantProduct,
        error: null,
        loading: false
      })
    }).catch((error) => {
      console.log('there was an error', error)
      this.setState({
        product: null,
        variantProduct: null,
        error,
        loading: false
      })
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId &&
        prevProps.match.params.variantId !== this.props.match.params.variantId
    ) {
      let { fetchProduct, match } = this.props
      const { params: {productId, variantId} } = match
      // attempt to fetch product
      fetchProduct(productId)
       .then((product) => {
         console.log('this is the product found', product)
         const variantProduct = product.variants.find((variant) => {
           return variant.id === variantId
         })
         this.setState({
           product: product,
           variantProduct,
           error: null,
           loading: false
         })
       }).catch((error) => {
         console.log('there was an error', error)
         this.setState({
           product: null,
           variantProduct: null,
           error,
           loading: false
         })
       })
    }
  }
  render() {
    return (
      <Fragment>
       {(!this.state.loading && this.state.product) &&
        (
          <div class="ProductDetail fixed z3 t0 l0 w100 bg-color-white-wash">
            <div className='relative maxw60 w100 mxauto px2' style={{height: "auto", minHeight:"37rem"}}>
              <Product product={this.state.product} addItemToCart={this.props.addItemToCart} />
            </div>
          </div>
        )
        }
        {this.state.loading && (<p>Loading</p>)}
      </Fragment>
    )
  }
}

export default ProductDetail
