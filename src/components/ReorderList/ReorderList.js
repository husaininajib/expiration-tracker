import React from "react"
import ReorderItem from "../ReorderItem/ReorderItem"

const ReorderList = ({ darkMode, reorderList, showReorderList }) => {
  const reorderContainerStyle = {
    backgroundColor: darkMode ? "#000000" : "#f8f9d2",
    backgroundImage: darkMode
      ? ""
      : "linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)",
  }
  return (
    <article
      className={`wrapper reorder-container px-4 ${
        showReorderList ? "show" : ""
      }`}
      style={reorderContainerStyle}
    >
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-semibold my-4"
          style={{ color: darkMode ? "#c8c8c8" : "" }}
        >
          Reorder List
        </h1>
      </div>
      {reorderList.length < 1 ? (
        <p style={{ color: darkMode ? "#c8c8c8" : "" }}>No item to restock</p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {reorderList.map((product) => {
            return <ReorderItem key={product.id} product={product} />
          })}
        </div>
      )}
    </article>
  )
}

export default ReorderList
