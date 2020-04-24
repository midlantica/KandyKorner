import React from 'react'
import LocationList from './location/LocationList'
import { LocationProvider } from './location/LocationProvider'
import ProductList from './products/ProductList'
import { ProductProvider } from './products/ProductProvider'
export default () => (
  <>
    <header>
      <h2>Kandy Korner</h2>
      <p>Kandy for the Kid in all of us</p>
    </header>

    <div className='container'>
      <h2>Products</h2>
      <ProductProvider>
        <ProductList />
      </ProductProvider>

      <h2>Locations</h2>
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </div>

    <footer></footer>
  </>
)
