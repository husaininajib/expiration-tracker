import React from "react"

const Label = (props) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900"
      style={{ color: props.textColor }}
    >
      {props.title}
    </label>
  )
}

export default Label
