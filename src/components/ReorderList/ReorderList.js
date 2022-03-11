import React from "react"
import ReorderItem from "../ReorderItem/ReorderItem"
import "./reorder.css"

const ReorderList = ({ reorderList, showReorderList }) => {
  return (
    <article
      className={`wrapper reorder-container ${showReorderList ? "show" : ""}`}
    >
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold  my-4">Reorder List</h1>
      </div>
      {reorderList.length < 1 ? (
        <h2 className="px-4">No item to restock</h2>
      ) : (
        reorderList.map((product) => {
          return <ReorderItem key={product.id} product={product} />
        })
      )}
    </article>
  )
}

export default ReorderList
