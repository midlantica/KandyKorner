import React, { useEffect, useState } from 'react'

// The context is imported and used by individual components that need data
export const ProductContext = React.createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return fetch('http://localhost:8088/productTypes')
      .then((res) => res.json())
      .then(setProducts)
  }

  const addProduct = (products) => {
    return fetch('http://localhost:8088/productTypes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products),
    }).then(getProducts)
  }

  // Load all products when the component is mounted. Ensure that
  // an empty array is the second argument to avoid infinite loop.
  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    console.log('****  LOCATION APPLICATION STATE CHANGED  ****')
  }, [products])

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
