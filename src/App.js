import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import ProductList from "./components/ProductList"
import { nanoid } from "nanoid"
import { HiViewGrid } from "react-icons/hi"

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

  // TODO: Update form changes
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  //TODO: Submit/push form to products state
  const submitFormData = (e) => {
    e.preventDefault()
    const { productName, imageURL, expiryDate, quantity, unit, weightPerItem } =
      formData

    if (productName && expiryDate && quantity && unit && weightPerItem) {
      const newFormData = { id: nanoid(), ...formData }
      setProducts((prevProducts) => {
        const newProducts = [...prevProducts]
        newProducts.push(newFormData)
        return newProducts
      })
    } else console.log("please fill in the form")

    setFormData({
      productName: "",
      imageURL: "",
      expiryDate: "",
      quantity: 0,
      unit: "kg",
      weightPerItem: 0,
    })
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  })

  return (
    <>
      <header>
        <nav
          className="flex items-center justify-between h-14 text-white"
          style={{ backgroundColor: "#7A3BED" }}
        >
          <a href="">Inventory Tracker</a>
          <div>
            <HiViewGrid />
          </div>
        </nav>
      </header>
      {/* <Form
        handleChange={handleChange}
        handleSubmit={submitFormData}
        formData={formData}
      /> */}
      <ProductList products={products} setProducts={setProducts} />
    </>
  )
}

export default App
