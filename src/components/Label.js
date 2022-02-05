import React from "react"
import formStyle from "./formStyle"

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={formStyle.label}>
      {props.title}
    </label>
  )
}

export default Label
