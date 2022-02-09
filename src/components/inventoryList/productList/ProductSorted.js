import React from "react"
import { HiOutlineMinusCircle, HiOutlineTrash } from "react-icons/hi"
import { GrAddCircle } from "react-icons/gr"
import useCalculation from "./useCalculation"

const ProductSorted = ({ product, handleAdd, handleRemove, deleteProduct }) => {
  const { countdown, weight, totalWeight, toggleUnit } = useCalculation(product)
  return (
    <article className="border w-full mt-7">
      <div className="flex gap-4">
        <img
          src={
            product.imageURL ? product.imageURL : "https://tinyurl.com/3ctc7svd"
          }
          alt="product-image"
          className="w-20 h-20 rounded-lg"
        />
        <div>
          <div className="flex justify-between">
            <h2 className="uppercase font-bold">{product.productName}</h2>
            <span className="capitalize">{product.category}</span>
          </div>
          <p className="font-semibold">
            {countdown} days till expired ({product.expiryDate})
          </p>
          <ul className="flex gap-2 font-semibold">
            <li className="">
              {product.quantity} PKT /
              {totalWeight % 1 !== 0 ? totalWeight.toFixed(2) : totalWeight}{" "}
              {weight.unit}
            </li>
            <li className="capitalize">
              {product.quantity === 1 ? "Stock Left" : "Stocks Left"}
            </li>
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
            <li onClick={() => toggleUnit()} className="cursor-pointer">
              {weight.unit === "kg" ? "KG" : "GRAM"}
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ProductSorted
