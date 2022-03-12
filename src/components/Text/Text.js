import React from "react"

const Text = (props) => {
  return (
    <span className={props.classStyle} style={{ color: props.textColor }}>
      {props.content}
    </span>
  )
}

export default Text
