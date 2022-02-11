import React from "react"

const ReorderItem = ({ product }) => {
  return (
    <article className="w-full px-4 mb-6">
      <div className="flex gap-4">
        <img
          src={
            product.imageURL ? product.imageURL : "https://tinyurl.com/3ctc7svd"
          }
          alt="product-image"
          className="w-20 h-20 rounded-lg"
        />
        <div className="w-full">
          <ul className="flex justify-between">
            <li className="uppercase font-bold">{product.productName}</li>
            <li className="font-semibold text-white bg-purple-600 px-2 rounded-md capitalize">
              {product.category}
            </li>
          </ul>
          <ul className="font-semibold">
            <li>
              {product.quantity === 1 ? "Stock Left:" : "Stocks Left:"}{" "}
              {product.quantity} PCS
            </li>
            <li>Reorder Point: {product.dailyUsage * product.leadTime} PCS</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ReorderItem
