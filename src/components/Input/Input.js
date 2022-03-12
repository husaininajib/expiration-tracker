import React from "react"

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      value={props.value}
      onChange={props.handleChange}
    />
  )
}

export default Input
