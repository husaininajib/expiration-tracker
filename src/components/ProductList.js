import React, { useState } from "react"
import { HiOutlineMinusCircle, HiOutlineTrash } from "react-icons/hi"
import { GrAddCircle } from "react-icons/gr"
import ProductItem from "./ProductItem"

const ProductList = ({ products, setProducts }) => {
  const sortedProducts = products.sort(
    (a, b) =>
      new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
  )

  // const minute = 1000 * 60
  // const hours = minute * 60
  // const day = hours * 24

  // // TODO: Add quantity
  // function handleAdd(id) {
  //   const newProducts = []
  //   for (let i = 0; i < products.length; i++) {
  //     const product = products[i]
  //     if (product.id === id) {
  //       const b = {
  //         ...product,
  //         quantity: parseInt(product.quantity) + 1,
  //       }
  //       newProducts.push(b)
  //     } else {
  //       newProducts.push(product)
  //     }
  //   }
  //   setProducts(newProducts)
  // }

  // // TODO: remove quantity
  // function handleRemove(id) {
  //   const newProducts = []
  //   for (let i = 0; i < products.length; i++) {
  //     const product = products[i]
  //     if (product.id === id && product.quantity > 0) {
  //       const a = {
  //         ...products[i],
  //         quantity: parseInt(product.quantity) - 1,
  //       }
  //       newProducts.push(a)
  //     } else {
  //       newProducts.push(product)
  //     }
  //   }
  //   setProducts(newProducts)
  // }

  // // TODO: Delete product
  // const deleteProduct = (id) => {
  //   const newProducts = products.filter((product) => {
  //     return id !== product.id
  //   })
  //   setProducts(newProducts)
  // }

  // // FIXME: toggle unit (gram to kg or kg to gram)
  // const toggleUnit = (id) => {
  //   for (let i = 0; i < products.length; i++) {
  //     const product = products[i]
  //     if (id === product.id) {
  //       console.log({
  //         ...product,
  //         weightPerQuantity: product.weightPerQuantity * 1000,
  //         weightUnit: "gram",
  //       })
  //     }
  //   }
  // }
  // create component
  return (
    <>
      {sortedProducts.map((product, index) => {
        // const totalWeight = product.quantity * product.weightPerQuantity
        // const expiryDate = new Date(product.expiryDate).getTime() / day
        // const currentDate = new Date().getTime() / day
        // const countdown = Math.ceil(expiryDate - currentDate)

        return (
          <ProductItem
            key={index}
            product={product}
            products={products}
            setProducts={setProducts}
          />
          // <article key={index} className="border w-full mt-7">
          //   <div className="flex gap-4">
          //     <img
          //       src={product.imageURL}
          //       alt="product-image"
          //       className="w-20 h-20 rounded-lg"
          //     />
          //     <div>
          //       <div className="flex justify-between">
          //         <h2 className="uppercase font-bold">{product.productName}</h2>
          //         <span className="capitalize">{product.category}</span>
          //       </div>
          //       <p className="font-semibold">
          //         {countdown} days till expired ({product.expiryDate})
          //       </p>
          //       <ul className="flex gap-2 font-semibold">
          //         <li className="">
          //           {product.quantity} PKT /
          //           {totalWeight % 1 !== 0
          //             ? totalWeight.toFixed(2)
          //             : totalWeight}{" "}
          //           {product.weightUnit}
          //           {/* {gram ? "gram" : "kg"} */}
          //         </li>
          //         <li className="capitalize">
          //           {product.quantity === 1 ? "Stock Left" : "Stocks Left"}
          //         </li>
          //       </ul>
          //       <ul className="flex gap-2 text-lg items-center mt-3">
          //         <li onClick={() => handleAdd(product.id)}>
          //           <GrAddCircle />
          //         </li>
          //         <li onClick={() => handleRemove(product.id)}>
          //           <HiOutlineMinusCircle />
          //         </li>
          //         <li
          //           className="ml-auto text-red-600"
          //           onClick={() => deleteProduct(product.id)}
          //         >
          //           <HiOutlineTrash />
          //         </li>
          //         <li
          //           onClick={() => toggleUnit(product.id)}
          //           className="cursor-pointer"
          //         >
          //           toggle
          //         </li>
          //       </ul>
          //     </div>
          //   </div>
          // </article>
        )
      })}
    </>
  )
}

export default ProductList
