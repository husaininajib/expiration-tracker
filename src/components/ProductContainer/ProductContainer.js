import React from "react"
// import ProductItem from "../inventoryList/productList/ProductItem"
import ProductItem from "../ProductItem/ProductItem"
import useProductsFeatures from "../custom-hooks/useProductsFeatures"

const ProductContainer = ({ products, setProducts, currentCategory }) => {
  const { handleAdd, handleRemove, deleteProduct, filteredProducts } =
    useProductsFeatures(products, setProducts, currentCategory)
  return (
    <div className="flex flex-col gap-6">
      {filteredProducts.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            deleteProduct={deleteProduct}
          />
        )
      })}
      {/* {filteredProducts.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            deleteProduct={deleteProduct}
          />
        )
      })} */}
    </div>
  )
}

export default ProductContainer
