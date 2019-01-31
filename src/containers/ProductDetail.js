import React, {Component} from 'react'

class ProductDetail extends Component {
  contructor(props) {
    super(props)
  }
  componentDidMount() {
   const { fetchProduct, match } = this.props
   const { params: {id} } = match   
   // attempt to fetch product
  }
  render() {
    return (
      <div class="ProductDetail">

      </div>
    )
  }
}
