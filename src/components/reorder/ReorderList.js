import React from "react"
import ProductSorted from "../inventoryList/productList/ProductSorted"
import ReorderItem from "./ReorderItem"

const ReorderList = ({ reorderList }) => {
  return (
    <div className="reorder-container grid gap-3 m-4">
      <h1 className="text-2xl font-semibold">ReorderList</h1>
      {reorderList.map((product) => {
        return <ReorderItem key={product.id} product={product} />
      })}
    </div>
  )
}

export default ReorderList
