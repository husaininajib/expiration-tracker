import React from "react"
import Heading from "../Heading/Heading"
import CategoryList from "../CategoryList/CategoryList"
import ProductContainer from "../ProductContainer/ProductContainer"

const InventoryContainer = (props) => {
  const textColor = props.darkMode ? "#c8c8c8" : "#000000"
  return (
    <section className="wrapper px-4 mt-4">
      <Heading title="My Inventory" textColor={textColor} />
      {props.products.length < 1 ? (
        <h2 className="mt-4">Add stock to track your inventory expiry date</h2>
      ) : (
        <>
          <CategoryList
            darkMode={props.darkMode}
            categories={props.categories}
            currentCategory={props.currentCategory}
            setCurrentCategory={props.setCurrentCategory}
          />
          <ProductContainer
            products={props.products}
            setProducts={props.setProducts}
            categories={props.categories}
            currentCategory={props.currentCategory}
            setCurrentCategory={props.setCurrentCategory}
          />
        </>
      )}
    </section>
  )
}

export default InventoryContainer
