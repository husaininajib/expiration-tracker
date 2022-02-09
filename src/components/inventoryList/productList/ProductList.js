import React, { useState } from "react"
import ProductItem from "./ProductItem"
import ProductSorted from "./ProductSorted"
import useProductsFeatures from "../hooks/useProductsFeatures"

const ProductList = ({ products, setProducts, currentCategory }) => {
  const {
    handleAdd,
    handleRemove,
    deleteProduct,
    toggleUnit,
    filteredProducts,
  } = useProductsFeatures(products, setProducts, currentCategory)

  return (
    <>
      {filteredProducts.map((product) => {
        return (
          <ProductSorted
            key={product.id}
            product={product}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            deleteProduct={deleteProduct}
            // toggleUnit={toggleUnit}
          />
        )
      })}
    </>
  )
}

export default ProductList
