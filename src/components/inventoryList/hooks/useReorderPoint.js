import React, { useEffect, useState } from "react"

const useReorderPoint = (products) => {
  const [reorderList, setReorderList] = useState([])

  const newReorder = products.filter((product) => {
    const reorderPoint = product.dailyUsage * product.leadTime
    return product.quantity < reorderPoint
  })

  // useEffect(() => {
  //   localStorage.setItem("reorderList", JSON.stringify(newReorder))
  // }, [reorderList])

  return { newReorder }
}

export default useReorderPoint
