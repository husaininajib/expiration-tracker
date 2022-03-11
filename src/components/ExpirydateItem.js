import React from "react"

const ExpirydateItem = ({ item }) => {
  return (
    <li>
      {item.expiryDate} | Stocks left: {item.quantity}
    </li>
  )
}

export default ExpirydateItem
