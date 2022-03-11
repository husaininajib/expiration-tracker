import React from "react"
import ReorderItem from "../ReorderItem/ReorderItem"
import { FaTimes } from "react-icons/fa"
import "./reorder.css"

const ReorderList = ({ reorderList, showReorderList, setShowReorderList }) => {
  return (
    <article
      className={`reorder-container bg-green-300 ${
        showReorderList ? "show" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold  my-4">Reorder List</h1>
        <FaTimes onClick={() => setShowReorderList(!showReorderList)} />
      </div>
      {reorderList.map((product) => {
        return <ReorderItem key={product.id} product={product} />
      })}
    </article>
  )
}

export default ReorderList
