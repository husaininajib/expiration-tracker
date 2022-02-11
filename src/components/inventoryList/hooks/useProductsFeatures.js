import React, { useState } from "react"

const useProductsFeatures = (products, setProducts, currentCategory) => {
  const sortedProducts = products.sort(
    (a, b) =>
      new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
  )

  // TODO: Add quantity
  function handleAdd(id) {
    const newProducts = []
    for (let i = 0; i < products.length; i++) {
      const product = products[i]
      if (product.id === id) {
        const b = {
          ...product,
          quantity: parseInt(product.quantity) + 1,
        }
        newProducts.push(b)
      } else {
        newProducts.push(product)
      }
    }
    setProducts(newProducts)
  }

  // TODO: remove quantity
  function handleRemove(id) {
    const newProducts = []
    for (let i = 0; i < products.length; i++) {
      const product = products[i]
      if (product.id === id && product.quantity > 0) {
        const a = {
          ...products[i],
          quantity: parseInt(product.quantity) - 1,
        }
        newProducts.push(a)
      } else {
        newProducts.push(product)
      }
    }
    setProducts(newProducts)
  }

  // TODO: Delete product
  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => {
      return id !== product.id
    })
    setProducts(newProducts)
  }

  const filteredProducts = sortedProducts.filter((product) => {
    if (currentCategory === "all") {
      return true
    } else {
      return product.category === currentCategory
    }
  })
  return {
    handleAdd,
    handleRemove,
    deleteProduct,
    filteredProducts,
  }
}

export default useProductsFeatures
