import React from "react"
import Heading from "../Heading"
import CategoryList from "./category/CategoryList"
import ProductContainer from "./productList/ProductContainer"

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
