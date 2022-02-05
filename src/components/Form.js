import React from "react"
import Label from "./Label"
import Input from "./Input"
import inputData from "./inputData"
import formStyle from "./formStyle"
import "./form.css"
import Select from "./Select"

const Form = ({ showForm, handleChange, handleSubmit, formData }) => {
  const { button, label, input } = formStyle
  const {
    productName,
    imageURL,
    expiryDate,
    quantity,
    unit,
    weightPerQuantity,
  } = formData
  return (
    <div className={`form-container ${showForm ? "show" : ""}`}>
      <form
        action=""
        className="grid gap-2 border m-0 p-0"
        onSubmit={handleSubmit}
      >
        <div className="grid">
          <Label htmlFor="text" title="Product Name" />
          <Input
            type="text"
            name="productName"
            value={productName}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="url" title="Image URL" />
          <Input
            type="url"
            name="imageURL"
            value={imageURL}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="date" title="Expiry Date" />
          <Input
            type="date"
            name="expiryDate"
            value={expiryDate}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="number" title="Quantity" />
          <Input
            type="number"
            name="quantity"
            value={quantity}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="number" title="Weight" />
          <Input
            type="number"
            name="weightPerQuantity"
            value={weightPerQuantity}
            handleChange={handleChange}
          />
        </div>
        {/* <div className="grid">
          <Label htmlFor="" title="Unit" />
          <select
            name="unit"
            className={input}
            onChange={handleChange}
          ></select>
        </div> */}
        <button type="submit" className={button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
