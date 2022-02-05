import React from "react"
import Label from "./Label"
import inputData from "./inputData"
import formStyle from "./formStyle"
import "./form.css"
import Select from "./Select"

const Form = ({ showForm, handleChange, handleSubmit, formData }) => {
  const { button, label, input } = formStyle
  return (
    <div className={`form-container ${showForm ? "show" : ""}`}>
      <form
        action=""
        className="grid gap-2 border m-0 p-0"
        onSubmit={handleSubmit}
      >
        <div className="grid">
          <Label htmlFor="text" title="Product Name" />
          <input type="text" name="productName" className={input} />
        </div>
        <div className="grid">
          <Label htmlFor="url" title="Image URL" />
          <input type="url" name="imageURL" className={input} />
        </div>
        <div className="grid">
          <Label htmlFor="date" title="Expiry Date" />
          <input type="date" name="expiryDate" className={input} />
        </div>
        <div className="grid">
          <Label htmlFor="number" title="Quantity" />
          <input type="number" name="quantity" className={input} />
        </div>
        <div className="grid">
          <Label htmlFor="number" title="Weight" />
          <input type="number" name="weight" className={input} />
        </div>
        {/* {inputData.map((input, index) => {
          const { type, name, id, label, value } = input
          return (
            <Input
              key={index}
              type={type}
              name={name}
              label={label}
              id={id}
              formData={props.formData}
              handleChange={props.handleChange}
              inputStyle={formStyle.input}
              labelStyle={formStyle.label}
            />
          )
        })}
        <Select name={["unitSKU, unitWeight"]} option={["CTN", "PKT"]} /> */}
        <div className="grid">
          <Label htmlFor="" title="Unit" />
          <select
            name="unit"
            id="unit"
            className={input}
            onChange={handleChange}
          ></select>
        </div>
        <button type="submit" className={button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
