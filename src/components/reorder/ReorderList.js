import React from "react"
import ProductItem from "../inventoryList/productList/ProductItem"
import ProductSorted from "../inventoryList/productList/ProductSorted"
import ReorderItem from "./ReorderItem"
import "./reorder.css"

const ReorderList = ({ reorderList, showReorderList, setShowReorderList }) => {
  return (
    <div
      className={`reorder-container bg-green-300 ${
        showReorderList ? "show" : ""
      }`}
    >
      <article className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold  my-4">Reorder List</h1>
        <div onClick={() => setShowReorderList(!showReorderList)}>
          <i className="fas fa-times"></i>
        </div>
      </article>
      {reorderList.map((product) => {
        return (
          <ReorderItem
            key={product.id}
            product={product}
            // setShowReorderList={setShowReorderList}
          />
        )
      })}
    </div>
  )
}

export default ReorderList
