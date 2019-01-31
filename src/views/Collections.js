import React, { Fragment } from 'react'

import Product from './../containers/Product'

export default ({ collections:_collections , addItemToCart}) => {
  let collections = _collections.map((collection, key) => {
    return (
      <div className="Collections__collection-container pt1" key={key}>
        <p className="small-text small-text--less-line-height color-gray p2 uppercase">
          { collection.title }
        </p>

        <div className="flex flex-row items-center flex-start overflow-y-scroll mb3 pb4">
        {
          collection.products.map((product, key) => {
            return <Product key={key} product={product} addItemToCart={addItemToCart} />
          })
        }
        </div>
      </div>
    )
  })

  return (
    <div className="Collections lg:col-10 mxauto mt1">
      { collections }
    </div>
  )
}
