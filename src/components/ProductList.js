import React from "react"

const ProductList = (props) => {
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
            <ul className="font-semibold capitalize flex  gap-2 mt-4 border">
              <li className="">Add Stock</li>
              <li className="">Remove Stock</li>
              <li className="">Delete Product</li>
            </ul>
          </article>
        )
      })}
    </>
  )
}

export default ProductList
