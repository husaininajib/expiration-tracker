import { useState, useEffect } from "react"

const useProducts = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  )

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  return {
    products,
    setProducts,
  }
}

export default useProducts
