import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import ProductList from "./components/ProductList"
import { nanoid } from "nanoid"

import Tools from "./components/Tools"
import Navbar from "./components/Navbar"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  )
  const [formData, setFormData] = useState({
    productName: "",
    imageURL: "",
    expiryDate: "",
    quantity: "",
    unit: "kg",
    weightPerQuantity: "",
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
    const {
      productName,
      imageURL,
      expiryDate,
      quantity,
      unit,
      weightPerQuantity,
    } = formData

    if (productName && expiryDate && quantity && unit && weightPerQuantity) {
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
      quantity: "",
      unit: "kg",
      weightPerQuantity: "",
    })
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  })

  return (
    <>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Form
        handleChange={handleChange}
        handleSubmit={submitFormData}
        formData={formData}
        showForm={showForm}
      />
      <main>
        <section className="px-4 mt-8">
          <h2 className=" text-2xl font-semibold">Welcome</h2>
          <p className="text-base mt-1">
            Track your inventory life and reduce waste and spoilage.
          </p>
          <Tools openForm={() => setShowForm(true)} />
        </section>
        <section className="px-4 mt-4">
          <h2 className="font-semibold text-2xl">My Inventory</h2>
          <ProductList products={products} setProducts={setProducts} />
        </section>
      </main>
    </>
  )
}

export default App
