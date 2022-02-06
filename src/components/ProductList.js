import React, { useState } from "react"
import Button from "./Button"
import { HiOutlineMinusCircle, HiOutlineTrash } from "react-icons/hi"
import { GrAddCircle } from "react-icons/gr"

const ProductList = ({ products, setProducts }) => {
  const [count, setCount] = useState(0)
  const [currentStock, setCurrentStock] = useState({})

  const minute = 1000 * 60
  const hours = minute * 60
  const day = hours * 24

  function handleAdd(id) {
    // console.log(quantity)
    const a = products.filter((item) => {
      return item.id === id
    })
    const newArr = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        const b = {
          ...products[i],
          quantity: parseInt(products[i].quantity) + 1,
        }
        newArr.push(b)
      } else {
        newArr.push(products[i])
      }
    }
    setProducts(newArr)
    console.log(newArr)
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
        const totalWeight = product.quantity * product.weightPerQuantity

        const expiryDate = new Date(product.expiryDate).getTime() / day
        const currentDate = new Date().getTime() / day
        const countdown = Math.floor(expiryDate - currentDate)

        return (
          <article key={index} className="border w-full mt-7">
            <div className="flex gap-4">
              <img
                src={product.imageURL}
                alt="product-image"
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
                    {product.quantity} PKT / {totalWeight} {product.weightUnit}
                  </li>
                  <li className="capitalize">Stocks left</li>
                </ul>
                <ul className="flex gap-2 text-lg items-center mt-3">
                  <li onClick={() => handleAdd(product.id)}>
                    <GrAddCircle />
                  </li>
                  <li onClick={() => handleRemove(product.id)}>
                    <HiOutlineMinusCircle />
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
          </article>
        )
      })}
    </>
  )
}

export default ProductList

// [
//   {
//     name: "john.",
//     age: 30,
//     favFood: "burger",
//   },
//   {
//     name: "scott",
//     age: 25,
//     favFood: "pizza",
//   },
// ]
