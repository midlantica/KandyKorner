import React from 'react'

export default ({ product }) => (
  <section className='box product'>
    <h4>{product.name}</h4>
    <p>Type: {product.type}</p>
    <p>Price: {product.price}</p>
  </section>
)
