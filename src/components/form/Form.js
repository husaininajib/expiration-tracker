import React from "react"
import Label from "./Label"
import Input from "./Input"
import formStyle from "./formStyle"
import "./form.css"

const Form = ({ showForm, formData, handleChange, submitFormData }) => {
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
            value={formData.category}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="productName" title="Product Name" />
          <Input
            type="text"
            name="productName"
            value={formData.productName}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="imageURL" title="Image URL" />
          <Input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="expiryDate" title="Expiry Date" />
          <Input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="quantity" title="Quantity" />
          <Input
            type="number"
            name="quantity"
            value={formData.quantity}
            handleChange={handleChange}
          />
        </div>
        <article className="flex gap-3">
          <div className="grid grow">
            <Label htmlFor="weightPerQuantity" title="Weight" />
            <Input
              type="number"
              name="weightPerQuantity"
              value={formData.weightPerQuantity}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="weightUnit" title="Unit" />
            <select
              name="weightUnit"
              className={formStyle.input}
              onChange={handleChange}
              value={formData.weightUnit}
            >
              <option value="kg">Kg</option>
              <option value="gram">Gram</option>
            </select>
          </div>
        </article>
        <div className="grid">
          <Label htmlFor="dailyUsage" title="Daily Usage" />
          <Input
            type="number"
            name="dailyUsage"
            value={formData.dailyUsage}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label htmlFor="leadTime" title="Lead Time" />
          <Input
            type="number"
            name="leadTime"
            value={formData.leadTime}
            handleChange={handleChange}
          />
        </div>
        <button type="submit" className={formStyle.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
