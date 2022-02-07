import React from "react"

const Categories = ({ products, setProducts, category, setCategory }) => {
  const categoryList = ["all"]

  products.forEach((item) => {
    categoryList.push(item.category)
  })

  function handleSort(list) {
    setCategory(list)
  }

  return (
    <div>
      <ul className="capitalize">
        {categoryList.map((item, index) => {
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

export default Categories
