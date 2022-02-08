import React, { useState } from "react"
import { nanoid } from "nanoid"

const useFormData = (setProducts) => {
  // const { products, setProducts } = useLocalStorage()
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    imageURL: "",
    expiryDate: "",
    quantity: "",
    weightPerQuantity: "",
    weightUnit: "kg",
  })

  // ALL FORM FUNCTIONS

  // TODO: Update form changes
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  // TODO: update form data

  function updateFormData() {
    const newFormData = { id: nanoid(), ...formData }
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts]
      newProducts.push(newFormData)
      return newProducts
    })
  }

  // TODO: check if all form input is filled
  function checkFormData() {
    if (
      formData.productName &&
      formData.expiryDate &&
      formData.quantity &&
      formData.weightPerQuantity &&
      formData.weightUnit
    ) {
      updateFormData()
      resetForm()
    } else console.log("Fill in the form!!")
  }

  // TODO: reset input to default data
  function resetForm() {
    setFormData({
      category: "",
      productName: "",
      imageURL: "",
      expiryDate: "",
      quantity: "",
      weightPerQuantity: "",
      weightUnit: "kg",
    })
  }

  //TODO: Submit/push form to products state
  const submitFormData = (e) => {
    e.preventDefault()
    checkFormData()

    // setCategories((prevState) => {
    //   const newCategories = [...prevState, formData.category]
    //   const filtered = newCategories.filter((item, index) => {
    //     return newCategories.indexOf(item) === index
    //   })
    //   return filtered
    // })
  }

  return {
    handleChange,
    updateFormData,
    checkFormData,
    resetForm,
    submitFormData,
    formData,
    setFormData,
  }
}

export default useFormData
