import React from "react"
import Button from "./Button"

const ProductList = (props) => {
  function handleAdd(id) {
    console.log(id)
  }

  const handleRemove = (id) => {
    props.setProducts((prev) =>
      prev.map((item) => {
        if (parseInt(item.quantity) > 0) {
          return { ...item, quantity: parseInt(item.quantity) - 1 }
        }
      })
    )
  }

  const removeProduct = (productId) => {
    const newProducts = props.products.filter((product) => {
      return productId !== product.productName
    })
    props.setProducts(newProducts)
  }

  return (
    <>
      {props.products.map((product, index) => {
        const totalWeight = product.quantity * product.weightPerItem
        const minute = 1000 * 60
        const hours = minute * 60
        const day = hours * 24
        const expiryDate = new Date(product.expiryDate).getTime() / day
        const currentDate = new Date().getTime() / day
        const countdown = Math.floor(expiryDate - currentDate)

        return (
          <article key={index} className="border p-4 w-full">
            <div className="flex gap-4">
              <img
                src={product.imageURL}
                alt=""
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <h2 className="uppercase font-bold">{product.productName}</h2>
                <p className="font-semibold">
                  {countdown} days till expired (
                  {product.expiryDate.toLocaleString()})
                </p>
                <ul className="flex gap-2 font-semibold">
                  <li className="">
                    {product.quantity} CTN / {totalWeight} {product.unit}
                  </li>
                  <li className="capitalize">Stocks left</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => handleAdd(product.productName)}>
                Add
              </button>
              <button onClick={() => handleRemove(product.productName)}>
                Remove
              </button>
              <button onClick={() => removeProduct()}>Delete</button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default ProductList
