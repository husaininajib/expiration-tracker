import React, { useState } from "react"

const CategoriesItem = ({
  products,
  setProducts,
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
  handleSort,
}) => {
  // function handleSort(list) {
  //   setSelectedCategory(list)
  // }
  // const categoriesItem = ["all"]
  //
  // create
  console.log(categories)
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

export default CategoriesItem
