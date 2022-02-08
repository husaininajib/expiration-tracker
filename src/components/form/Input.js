import React from "react"
import formStyle from "./formStyle"

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className={formStyle.input}
      value={props.value}
      onChange={props.handleChange}
    />
  )
}

export default Input
