import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/form/Form"
import Navbar from "./components/navbar/Navbar"
import HeroContainer from "./components/hero/HeroContainer"
import InventoryContainer from "./components/inventoryList/InventoryContainer"
import useLocalStorage from "./components/form/hooks/useLocalStorage"
import useFormData from "./components/form/hooks/useFormData"
import useDisplayForm from "./components/form/hooks/useDisplayForm"
import useCategories from "./components/inventoryList/hooks/useCategories"
import useReorderPoint from "./components/inventoryList/hooks/useReorderPoint"
import ReorderList from "./components/reorder/ReorderList"

function App() {
  const { showForm, setShowForm, toolsOption } = useDisplayForm()
  const { products, setProducts } = useLocalStorage()
  const { categories, setCategories, latestCategory } = useCategories(products)
  const [currentCategory, setCurrentCategory] = useState("all")
  const { formData, submitFormData, handleChange } = useFormData(setProducts)
  const { newReorder } = useReorderPoint(products)

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
          reorderStock={newReorder}
        />
        <InventoryContainer
          products={products}
          setProducts={setProducts}
          categories={latestCategory}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </main>
      <ReorderList reorderList={newReorder} />
    </>
  )
}

export default App
