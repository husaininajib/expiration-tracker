import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

const useFormData = (setProducts) => {
  // const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productCode: "",
    imageURL: "",
    averageSalesPerDay: "",
    daysToReceiveNewStock: "",
    expiryDate: "",
    quantity: "",
    weightPerQuantity: "",
    weightUnit: "kg",
  })
  // const [formData, setFormData] = useState({
  //   category: "",
  //   productName: "",
  //   productCode: "",
  //   imageURL: "",
  //   averageSalesPerDay: "",
  //   daysToReceiveNewStock: "",
  //   quantity: "",
  //   data: [
  //     {
  //       expiryDate: "",
  //       quantity: "",
  //       weightPerQuantity: "",
  //       weightUnit: "kg",
  //     },
  //   ],
  // })

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

  // TODO: creating Array for product Data

  // const combineProductData = () => {
  //   const newData = [...data]
  //   const objectData = {
  //     expiryDate: formData.expiryDate,
  //     quantity: formData.quantity,
  //     weightPerQuantity: formData.weightPerQuantity,
  //     weightUnit: formData.weightUnit,
  //   }
  //   newData.push(objectData)
  //   setData([...newData])
  // }

  // const customFormData = formData
  // delete customFormData.expiryDate
  // delete customFormData.quantity
  // delete customFormData.weightPerQuantity
  // delete customFormData.weightUnit

  // TODO: update form data
  function updateFormData() {
    // combineProductData()

    // const latestFormData = {
    //   ...customFormData,
    //   data,
    // }

    const newFormData = {
      id: nanoid(),
      ...formData,
      // data: data,
    }
    setProducts((prevState) => {
      const newProducts = [...prevState]
      newProducts.push(newFormData)
      return newProducts
    })

    // const newFormData = {
    //   id: nanoid(),
    //   ...formData,
    //   quantity: +formData.quantity,
    //   weightPerQuantity: +formData.weightPerQuantity,
    //   averageSalesPerDay: +formData.averageSalesPerDay,
    //   daysToReceiveNewStock: +formData.daysToReceiveNewStock,
    // }
    // setProducts((prevProducts) => {
    //   // const newProducts =
    //   const newProducts = [...prevProducts]
    //   newProducts.push(newFormData)
    //   return newProducts
    // })
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
      averageSalesPerDay: "",
      daysToReceiveNewStock: "",
    })
  }

  // TODO: check if all form input is filled
  function checkFormData() {
    if (
      formData.category !== "select category" &&
      formData.category &&
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
    // data,
  }
}

export default useFormData
