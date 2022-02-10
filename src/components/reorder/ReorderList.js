import React from "react"

const ReorderList = ({ reorderList }) => {
  return (
    <div className="reorder-container grid gap-3 m-4">
      <h1 className="text-2xl font-semibold">ReorderList</h1>
      {reorderList.map((item) => {
        return (
          <div key={item.id} className="p-4 bg-purple-400 w-2/4">
            <h2>{item.productName}</h2>
            <p>current quantity: {item.quantity}</p>
            <p>reorder point: {item.dailyUsage * item.leadTime}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ReorderList
