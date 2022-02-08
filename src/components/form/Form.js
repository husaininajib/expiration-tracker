import React from "react"
import Label from "./Label"
import Input from "./Input"
import formStyle from "./formStyle"
import "./form.css"
import { nanoid } from "nanoid"

const Form = ({
  showForm,
  setFormData,
  setProducts,
  formData,
  categories,
  setCategories,
}) => {
  const { button, label, input } = formStyle
  const {
    category,
    productName,
    imageURL,
    expiryDate,
    quantity,
    weightUnit,
    weightPerQuantity,
  } = formData

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

    setCategories((prevState) => {
      const newCategories = [...prevState, formData.category]
      const filtered = newCategories.filter((item, index) => {
        return newCategories.indexOf(item) === index
      })
      return filtered
    })
  }
  const arr = []
  const a = JSON.parse(localStorage.getItem("products"))
  console.log(a)
  return (
    <div className={`form-container ${showForm ? "show" : ""}`}>
      <form
        action=""
        className="grid gap-2 border m-0 p-0"
        onSubmit={submitFormData}
      >
        <div className="grid">
          <Label htmlFor="category" title="Category" />
          <Input
            type="text"
            name="category"
            value={category}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="productName" title="Product Name" />
          <Input
            type="text"
            name="productName"
            value={productName}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="imageURL" title="Image URL" />
          <Input
            type="url"
            name="imageURL"
            value={imageURL}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="expiryDate" title="Expiry Date" />
          <Input
            type="date"
            name="expiryDate"
            value={expiryDate}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="quantity" title="Quantity" />
          <Input
            type="number"
            name="quantity"
            value={quantity}
            handleChange={handleChange}
          />
        </div>
        <article className="flex gap-3">
          <div className="grid grow">
            <Label htmlFor="weightPerQuantity" title="Weight" />
            <Input
              type="number"
              name="weightPerQuantity"
              value={weightPerQuantity}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="weightUnit" title="Unit" />
            <select
              name="weightUnit"
              className={formStyle.input}
              onChange={handleChange}
              value={weightUnit}
            >
              <option value="kg">Kg</option>
              <option value="gram">Gram</option>
            </select>
          </div>
        </article>
        <button type="submit" className={button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
