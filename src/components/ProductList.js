import React, { useState } from "react"
import Button from "./Button"
import { HiOutlineMinusCircle, HiOutlineTrash } from "react-icons/hi"
import { GrAddCircle } from "react-icons/gr"

const ProductList = ({ products, setProducts }) => {
  const [count, setCount] = useState(0)

  function handleAdd(id) {
    // FIXME: Tried to experiment by creating count state but not working and looks like doesn't make sense
    // setCount(quantity)
    // setCount((prev) => prev + 1)
    // console.log(count)
    // FIXME: when put if statement, got an error
    // setProducts((currentProduct) =>
    //   currentProduct.map((item) => {
    //     // if (item.id === id) {
    //     return { ...item, quantity: item.quantity + 1 }
    //     // }
    //   })
    // )
    //FIXME: this solution updates the state and display but all product element been updated.
    setProducts((currentProduct) =>
      currentProduct.map((item) => {
        return { ...item, quantity: item.quantity + 1 }
      })
    )
  }

  function handleRemove(id) {
    setProducts((prev) =>
      prev.map((item) => {
        if (parseInt(item.quantity) > 0) {
          return { ...item, quantity: parseInt(item.quantity) - 1 }
        }
      })
    )
  }

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => {
      return id !== product.id
    })
    setProducts(newProducts)
  }

  return (
    <>
      {products.map((product, index) => {
        const totalWeight = product.quantity * product.weightPerItem
        const minute = 1000 * 60
        const hours = minute * 60
        const day = hours * 24
        const expiryDate = new Date(product.expiryDate).getTime() / day
        const currentDate = new Date().getTime() / day
        const countdown = Math.floor(expiryDate - currentDate)

        return (
          <article key={index} className="border w-full mt-7">
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
                <ul className="flex gap-2 text-lg items-center mt-3">
                  <li className="">
                    <GrAddCircle />
                  </li>
                  <li>
                    <HiOutlineMinusCircle
                      onClick={() => handleRemove(product.id)}
                    />
                  </li>
                  <li
                    className="ml-auto text-red-600"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <HiOutlineTrash />
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="flex gap-4">
              <button onClick={() => handleAdd(product.id)}>Add</button>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div> */}
          </article>
        )
      })}
    </>
  )
}

export default ProductList
