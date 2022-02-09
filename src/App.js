import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/form/Form"
import Navbar from "./components/navbar/Navbar"
import HeroContainer from "./components/hero/HeroContainer"
import InventoryContainer from "./components/inventoryList/InventoryContainer"
import useLocalStorage from "./components/form/hooks/useLocalStorage"
import useFormData from "./components/form/hooks/useFormData"
import useDisplayForm from "./components/form/hooks/useDisplayForm"

function App() {
  const { showForm, setShowForm, toolsOption } = useDisplayForm()
  const [categories, setCategories] = useState(["all"])
  const [currentCategory, setCurrentCategory] = useState("all")
  const { products, setProducts } = useLocalStorage()
  const { formData, submitFormData, handleChange } = useFormData(setProducts)

  return (
    <>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Form
        showForm={showForm}
        formData={formData}
        handleChange={handleChange}
        submitFormData={submitFormData}
        products={products}
        setProducts={setProducts}
        categories={categories}
        setCategories={setCategories}
      />
      <main>
        <HeroContainer
          showForm={showForm}
          setShowForm={setShowForm}
          toolsOption={toolsOption}
        />
        <InventoryContainer
          products={products}
          setProducts={setProducts}
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </main>
    </>
  )
}

export default App
