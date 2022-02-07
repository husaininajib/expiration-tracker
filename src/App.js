import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import ProductList from "./components/ProductList"
import { nanoid } from "nanoid"
import Tools from "./components/Tools"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Heading from "./components/Heading"
import Text from "./components/Text"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  )
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    imageURL: "",
    expiryDate: "",
    quantity: "",
    weightPerQuantity: "",
    weightUnit: "kg",
  })
  const [category, setCategory] = useState("all")

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  return (
    <>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Form
        formData={formData}
        products={products}
        setFormData={setFormData}
        setProducts={setProducts}
        showForm={showForm}
      />
      <main>
        <section className="px-4 mt-8">
          <Heading title="Welcome" />
          <Text />
          <Tools openForm={() => setShowForm(true)} />
        </section>
        <section className="px-4 mt-4">
          <Heading title="My Inventory" />
          <Categories
            products={products}
            setProducts={setProducts}
            category={category}
            setCategory={setCategory}
          />
          <ProductList products={products} setProducts={setProducts} />
        </section>
      </main>
    </>
  )
}

export default App
