import React, { useState, useEffect } from "react"

const useCategories = (products) => {
  const [categories, setCategories] = useState(["all"])

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories))
  }, [])

  const newCategories = ["all"]
  products.forEach((item) => {
    newCategories.push(item.category)
  })
  const latestCategory = newCategories.filter((item, index) => {
    return newCategories.indexOf(item) === index
  })

  return { categories, setCategories, latestCategory }
}

export default useCategories
