import React from "react"
import Label from "../components/Label/Label"
import Input from "../Input/Input"
import formStyle from "./style/formStyle"
import optionData from "../components/Option/data/optionData"
import "./form.css"
import Option from "../components/Option/Option"

const Form = ({ showForm, formData, handleChange, submitFormData }) => {
  return (
    <div className={`wrapper form-container ${showForm ? "show" : ""}`}>
      <form action="" className="grid gap-2" onSubmit={submitFormData}>
        <div className="grid">
          <Label htmlFor="category" title="Category" />
          {/* <Input
            type="text"
            name="category"
            value={formData.category}
            handleChange={handleChange}
          /> */}
          <select
            name="category"
            className={formStyle.input}
            onChange={handleChange}
            value={formData.category}
          >
            {optionData.map((item, index) => {
              return <Option key={index} value={item} />
            })}
          </select>
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
        {/* <div className="grid">
          <Label htmlFor="productCode" title="Product Code" />
          <Input
            type="text"
            name="productCode"
            value={formData.productCode}
            handleChange={handleChange}
          />
        </div> */}
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
          <Label
            htmlFor="averageSalesPerDay"
            title="Average Product sold Per Day"
          />
          <Input
            type="number"
            name="averageSalesPerDay"
            value={formData.averageSalesPerDay}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label
            htmlFor="daysToReceiveNewStock"
            title="Days To Receive New Stock"
          />
          <Input
            type="number"
            name="daysToReceiveNewStock"
            value={formData.daysToReceiveNewStock}
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
