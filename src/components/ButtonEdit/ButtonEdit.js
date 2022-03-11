import React from "react"

const ButtonEdit = (props) => {
  return (
    <button className={props.buttonStyle} onClick={props.deleteProduct}>
      <i className={props.icon}></i>
    </button>
  )
}

export default ButtonEdit
