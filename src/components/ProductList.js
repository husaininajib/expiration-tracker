import React from "react"

const ProductList = (props) => {
  return (
    <>
      {props.products.map((product, index) => {
        return (
          <article key={index}>
            <div>
              <h2>{product.productName}</h2>
              <span>50 days till expired</span>
            </div>
            <div>
              <span>Expired Date:</span>
              <span>{product.expiryDate.toLocaleString()}</span>
            </div>
            <div>
              <img src={product.imageURL} alt="" />
              <ul>
                <li>Remaining Stocks: {product.quantity}</li>
                <li>Weight: {product.quantity * product.weightPerItem}</li>
              </ul>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default ProductList
