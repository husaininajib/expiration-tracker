import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/form/Form"
import ProductList from "./components/productList/ProductList"
import { nanoid } from "nanoid"
import Tools from "./components/Tools"
import Navbar from "./components/navbar/Navbar"
import CategoriesItem from "./components/categoriesFilter/CategoriesItem"
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
  const [categories, setCategories] = useState(["all"])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  function filteredProductList() {
    const newProductList = products.filter((product) => {
      return product.category === selectedCategory
    })
    setProducts(newProductList)
  }

  return (
    <>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Form
        formData={formData}
        products={products}
        setFormData={setFormData}
        setProducts={setProducts}
        showForm={showForm}
        categories={categories}
        setCategories={setCategories}
      />
      <main>
        <section className="px-4 mt-8">
          <Heading title="Welcome" />
          <Text />
          <Tools openForm={() => setShowForm(true)} />
        </section>
        <section className="px-4 mt-4">
          <Heading title="My Inventory" />
          <CategoriesItem
            products={products}
            setProducts={setProducts}
            categories={categories}
            setCategory={setCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleSort={filteredProductList}
          />
          <ProductList
            products={products}
            setProducts={setProducts}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>
      </main>
    </>
  )
}

export default App
