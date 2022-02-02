import React from "react"

const Button = (props) => {
  const handleAdd = () => {
    props.setProducts((prev) => [{ ...prev, quantity: prev.quantity + 1 }])
  }

  return (
    <div className="flex gap-4">
      <button onClick={() => handleAdd()}>Add Stock</button>
      <button>Remove Stock</button>
      <button>Delete Stock</button>
    </div>
  )
}

export default Button
