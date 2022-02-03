import React from "react"
import Input from "./Input"
import inputData from "./inputData"
import formStyle from "./formStyle"
import "./form.css"

const Form = (props) => {
  return (
    <div>
      <form action="" className="grid gap-2" onSubmit={props.handleSubmit}>
        {inputData.map((input, index) => {
          const { type, name, id, label, value } = input
          return (
            <Input
              key={index}
              type={type}
              name={name}
              label={label}
              id={id}
              handleChange={props.handleChange}
              inputStyle={formStyle.input}
              labelStyle={formStyle.label}
            />
          )
        })}
        <div className="grid">
          <label htmlFor="" className={formStyle.label}>
            Unit
          </label>
          <select
            name="unit"
            id="unit"
            className={formStyle.input}
            onChange={props.handleChange}
          >
            <option value="kg">KG</option>
            <option value="liter">Liter</option>
          </select>
        </div>
        <button type="submit" className={formStyle.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
