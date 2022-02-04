import React from "react"

const Input = (props) => {
  return (
    <div className="form-control grid">
      <label htmlFor={props.type} className={props.labelStyle}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        // value={props.value}
        id={props.id}
        className={props.inputStyle}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Input
