import React from "react"
import formStyle from "../../Form/style/formStyle"

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={formStyle.label}>
      {props.title}
    </label>
  )
}

export default Label
