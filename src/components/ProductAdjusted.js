import React from "react"
import ExpirydateItem from "./ExpirydateItem"
import useCalculation from "./custom-hooks/useCalculation"

const ProductAdjusted = ({ item }) => {
  return (
    <div className="bg-green-300 p-2">
      <div className="flex mb-3">
        <img
          src={item.imageURL ? item.imageURL : "https://tinyurl.com/3ctc7svd"}
          alt={item.productName + " image"}
          className="w-20 h-20 rounded-md mr-4"
        />
        <div className="w-full">
          <ul className="flex justify-between items-center capitalize font-semibold text-lg">
            <li>{item.productName}</li>
            <li className="font-medium text-sm bg-purple-500 px-2 rounded-md text-white">
              {item.category}
            </li>
          </ul>
          <ul className="font-medium">
            <li>Expired in 11 days</li>
            <li className="font-normal text-sm mt-1">
              Stock level to restock: {item.dailyUsage * item.leadTime}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Expiry Date:-</li>
          {item.data.map((item, index) => {
            return <ExpirydateItem key={index} item={item} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductAdjusted
