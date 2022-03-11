import React, { useState } from "react"

const useDisplayMenu = () => {
  const [showForm, setShowForm] = useState(false)
  const [showReorderList, setShowReorderList] = useState(false)

  return { showForm, setShowForm, showReorderList, setShowReorderList }
}

export default useDisplayMenu
