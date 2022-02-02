import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  )
  const [formData, setFormData] = useState({
    productName: "",
    imageURL: "",
    expiryDate: "",
    quantity: 0,
    unit: "kg",
    weightPerItem: 0,
  })

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitFormData = (e) => {
    e.preventDefault()
    const { productName, imageURL, expiryDate, quantity, unit, weightPerItem } =
      formData

    if (productName && expiryDate && quantity && unit && weightPerItem) {
      setProducts((prevProducts) => {
        const newProducts = [...prevProducts]
        newProducts.push(formData)
        return newProducts
      })
    } else console.log("please fill in the form")
    // setFormData({
    //   id: 0,
    //   productName: "",
    //   imageURL: "",
    //   expiryDate: "",
    //   quantity: 0,
    //   unit: "kg",
    //   weightPerItem: 0,
    // })
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  })

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={submitFormData} />
      <ProductList products={products} setProducts={setProducts} />

      <main></main>
    </>
  )
}

export default App
