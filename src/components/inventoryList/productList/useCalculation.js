import { useState } from "react"

const useCalculation = (product) => {
  const [weight, setWeight] = useState({
    total: product.quantity * product.weightPerQuantity,
    unit: product.weightUnit,
  })
  const minute = 1000 * 60
  const hours = minute * 60
  const day = hours * 24

  const totalWeight = product.quantity * product.weightPerQuantity
  const expiryDate = new Date(product.expiryDate).getTime() / day
  const currentDate = new Date().getTime() / day
  const countdown = Math.ceil(expiryDate - currentDate)

  const toggleUnit = () => {
    if (weight.unit === "kg") {
      setWeight((prevState) => {
        return { ...prevState, total: prevState.total * 1000, unit: "gram" }
      })
      setWeight({ total: totalWeight * 1000, unit: "gram" })
    } else {
      setWeight((prevState) => {
        return { ...prevState, total: prevState.total / 1000, unit: "kg" }
      })
    }
  }

  return { countdown, weight, toggleUnit }
}

export default useCalculation
