import React, { useState } from "react"

const CategoryList = ({
  darkMode,
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <div className="mb-7">
      <div className="flex mt-4">
        {categories.map((item, index) => {
          return (
            <button
              className={`px-2 py-1 capitalize rounded-sm ${
                currentCategory === item ? "bg-purple-700 text-white" : ""
              }`}
              style={{
                color: darkMode && currentCategory !== item ? "#ffffff" : "",
              }}
              key={index}
              onClick={() => setCurrentCategory(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryList
