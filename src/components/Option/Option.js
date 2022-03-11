import React from "react"

const Option = (props) => {
  return (
    <option value={props.value} className="capitalize">
      {props.value}
    </option>
  )
}

export default Option
