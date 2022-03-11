import React from "react"
import Heading from "../Heading/Heading"
import CategoryList from "../CategoryList/CategoryList"
import ProductContainer from "../ProductContainer/ProductContainer"

const InventoryContainer = (props) => {
  return (
    <section className="px-4 mt-4">
      <Heading title="My Inventory" />
      <CategoryList
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
    </section>
  )
}

export default InventoryContainer
