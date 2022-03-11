import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./Form/Form"
import Navbar from "./components/Navbar/Navbar"
import HeroContainer from "./components/HeroContainer/HeroContainer"
import InventoryContainer from "./components/InventoryContainer/InventoryContainer"
import useProducts from "./components/custom-hooks/useProducts"
import useFormData from "./components/custom-hooks/useFormData"
import useDisplayForm from "./components/custom-hooks/useDisplayForm"
import useCategories from "./components/custom-hooks/useCategories"
import useReorderPoint from "./components/custom-hooks/useReorderPoint"
import ReorderList from "./components/ReorderList/ReorderList"
import ProductAdjusted from "./components/ProductAdjusted"

function App() {
  const [showReorderList, setShowReorderList] = useState(false)
  const { showForm, setShowForm, toolsOption } = useDisplayForm()
  const { products, setProducts } = useProducts()
  const { categories, setCategories, latestCategory } = useCategories(products)
  const [currentCategory, setCurrentCategory] = useState("all")
  const { formData, submitFormData, handleChange, data } =
    useFormData(setProducts)
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
      <main className="wrapper border border-black">
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
      {/* <section className=" ">
        {items.map((item, index) => {
          return <ProductAdjusted key={index} item={item} />
        })}
      </section> */}
    </>
  )
}

export default App

// dropdown
// group them together but still under mango
// tool tip for exhange unit
//

// const arr = []
// for (let i = 0; i < products.length; i++) {
//   const product = products[i]

//   arr.push(product.productCode)
// }
// const b = products.filter((item) => {
//   return item.productCode
// })
// // console.log(arr)
// console.log(b)

// TODO: implement this logic
// if products got item that have the same stock code, combine it.

// const items = [
//   {
//     category: "fruit",
//     productName: "mango",
//     productCode: "a1",
//     imageURL: "https://tinyurl.com/267jtwwh",
//     data: [
//       {
//         weightPerQuantity: 1,
//         weightUnit: "kg",
//         quantity: 50,
//         expiryDate: "20/12/2022",
//       },
//       {
//         weightPerQuantity: 1.5,
//         weightUnit: "kg",
//         quantity: 20,
//         expiryDate: "25/12/2022",
//       },
//     ],
//     dailyUsage: 10,
//     leadTime: 2,
//   },
// ]
