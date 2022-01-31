import React from "react"

const Input = (props) => {
  return (
    <div className="form-control">
      <label htmlFor={props.type} className={props.labelStyle}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={props.inputStyle}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Input
