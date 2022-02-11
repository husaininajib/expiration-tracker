import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/form/Form"
import Navbar from "./components/navbar/Navbar"
import HeroContainer from "./components/hero/HeroContainer"
import InventoryContainer from "./components/inventoryList/InventoryContainer"
import useProducts from "./components/custom-hooks/useProducts"
import useFormData from "./components/custom-hooks/useFormData"
import useDisplayForm from "./components/custom-hooks/useDisplayForm"
import useCategories from "./components/custom-hooks/useCategories"
import useReorderPoint from "./components/custom-hooks/useReorderPoint"
import ReorderList from "./components/reorder/ReorderList"

function App() {
  const [showReorderList, setShowReorderList] = useState(false)
  const { showForm, setShowForm, toolsOption } = useDisplayForm()
  const { products, setProducts } = useProducts()
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
      <ReorderList
        showReorderList={showReorderList}
        setShowReorderList={setShowReorderList}
        reorderList={newReorder}
      />
      <main>
        <HeroContainer
          showForm={showForm}
          setShowForm={setShowForm}
          toolsOption={toolsOption}
          reorderStock={newReorder}
          showReorderList={showReorderList}
          setShowReorderList={setShowReorderList}
        />
        <InventoryContainer
          products={products}
          setProducts={setProducts}
          categories={latestCategory}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </main>
    </>
  )
}

export default App
