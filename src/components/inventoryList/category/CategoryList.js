import React, { useState } from "react"

const CategoryList = ({ categories, currentCategory, setCurrentCategory }) => {
  return (
    <div>
      <ul className="capitalize flex mt-4">
        {categories.map((item, index) => {
          return (
            <li
              className={`${
                currentCategory === item ? "bg-purple-700 text-white" : ""
              } px-2 py-1 cursor-pointer`}
              key={index}
              onClick={() => setCurrentCategory(item)}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList
