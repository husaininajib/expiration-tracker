import React from "react"

const ReorderItem = ({ product }) => {
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
          <ul className="flex gap-2 font-semibold">
            <li>{product.quantity}</li>
            <li className="capitalize">
              {product.quantity === 1 ? "Stock Left" : "Stocks Left"}
            </li>
            <li>Reorder Point: {product.dailyUsage * product.leadTime}</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ReorderItem
