import React, { useState } from "react"

const useDisplayForm = () => {
  const [showForm, setShowForm] = useState(false)

  return { showForm, setShowForm }
}

export default useDisplayForm
