import React, { useContext } from 'react'
import Product from './Product'
import { ProductContext } from './ProductProvider'

export default () => {
  const { products } = useContext(ProductContext)

  return (
    <div className='baseGrid products'>
      {products.map((prods) => (
        <Product key={prods.id} product={prods} />
      ))}
    </div>
  )
}
