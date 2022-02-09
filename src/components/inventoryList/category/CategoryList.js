import React, { useState } from "react"

const CategoryList = ({ categories, setCurrentCategory }) => {
  return (
    <div>
      <ul className="capitalize flex gap-3 mt-4">
        {categories.map((item, index) => {
          return (
            <li key={index} onClick={() => setCurrentCategory(item)}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList
