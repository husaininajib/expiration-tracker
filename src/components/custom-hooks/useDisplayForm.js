import React, { useState } from "react"

const useDisplayForm = () => {
  const [showForm, setShowForm] = useState(false)

  const toolsOption = [
    {
      title: "Update Stock",
      icon: "far fa-edit",
    },
    {
      title: "Stock Analysis",
      icon: "fas fa-chart-line",
    },
  ]

  return { showForm, setShowForm, toolsOption }
}

export default useDisplayForm
