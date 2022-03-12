import React from "react"

const Heading = (props) => {
  return (
    <h2 className="text-2xl font-semibold" style={{ color: props.textColor }}>
      {props.title}
    </h2>
  )
}

export default Heading
