import React, { useEffect, useState } from "react"

const useReorderPoint = (products) => {
  const reorderItems = products.filter((product) => {
    const reorderPoint =
      +product.averageSalesPerDay * +product.daysToReceiveNewStock
    return product.quantity <= reorderPoint
  })

  return { reorderItems }
}

export default useReorderPoint
