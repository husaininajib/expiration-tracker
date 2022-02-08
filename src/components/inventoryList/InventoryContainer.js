import React from "react"
import Heading from "../Heading"
import CategoryList from "./category/CategoryList"
import ProductList from "./productList/ProductList"

const InventoryContainer = (props) => {
  return (
    <section className="px-4 mt-4">
      <Heading title="My Inventory" />
      <CategoryList categories={props.categories} />
      <ProductList
        products={props.products}
        setProducts={props.setProducts}
        categories={props.categories}
        selectedCategory={props.selectedCategory}
        setSelectedCategory={props.setSelectedCategory}
      />
    </section>
  )
}

export default InventoryContainer
