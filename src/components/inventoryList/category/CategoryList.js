import React, { useState } from "react"

const CategoryList = ({ categories, handleSort }) => {
  return (
    <div>
      <ul className="capitalize">
        {categories.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSort(item)}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList
