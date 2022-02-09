import { useState } from "react"

const useCalculation = (product) => {
  const [weight, setWeight] = useState({
    weightPerQuantity: parseFloat(product.weightPerQuantity),
    unit: product.weightUnit,
  })
  const minute = 1000 * 60
  const hours = minute * 60
  const day = hours * 24

  const totalWeight = weight.weightPerQuantity * product.quantity
  const expiryDate = new Date(product.expiryDate).getTime() / day
  const currentDate = new Date().getTime() / day
  const countdown = Math.ceil(expiryDate - currentDate)

  const toggleUnit = () => {
    if (weight.unit === "kg") {
      setWeight((prevState) => {
        return {
          ...prevState,
          weightPerQuantity: prevState.weightPerQuantity * 1000,
          unit: "gram",
        }
      })
    } else {
      setWeight((prevState) => {
        return {
          ...prevState,
          weightPerQuantity: prevState.weightPerQuantity / 1000,
          unit: "kg",
        }
      })
    }
  }

  return { countdown, weight, totalWeight, toggleUnit }
}

export default useCalculation
