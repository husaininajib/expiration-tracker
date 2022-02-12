import React, { useState } from "react"
import { nanoid } from "nanoid"

const useFormData = (setProducts) => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productCode: "",
    imageURL: "",
    expiryDate: "",
    quantity: "",
    weightPerQuantity: "",
    weightUnit: "kg",
    dailyUsage: "",
    leadTime: "",
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
    const newFormData = {
      id: nanoid(),
      ...formData,
      quantity: +formData.quantity,
      weightPerQuantity: +formData.weightPerQuantity,
      dailyUsage: +formData.dailyUsage,
      leadTime: +formData.leadTime,
    }
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
      productCode: "",
      imageURL: "",
      expiryDate: "",
      quantity: "",
      weightPerQuantity: "",
      weightUnit: "kg",
      dailyUsage: "",
      leadTime: "",
    })
  }

  //TODO: Submit/push form to products state
  const submitFormData = (e) => {
    e.preventDefault()
    checkFormData()
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
