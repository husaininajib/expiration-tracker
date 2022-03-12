import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"

const Navbar = ({
  showForm,
  setShowForm,
  showReorderList,
  setShowReorderList,
  darkMode,
  setDarkMode,
}) => {
  const resetToggleMenu = () => {
    setShowForm(false)
    setShowReorderList(false)
  }
  const textColor = darkMode ? "#c8c8c8" : "#ffffff"
  return (
    <header
      className=""
      style={{ backgroundColor: darkMode ? "#1f1f1f" : "#7A3BED" }}
    >
      <nav className="wrapper flex items-center justify-between h-14 text-white text-lg px-4">
        {showForm || showReorderList ? (
          <FaTimes
            onClick={() => resetToggleMenu()}
            className="text-xl cursor-pointer"
          />
        ) : (
          <HiViewGrid
            className="text-2xl cursor-pointer"
            style={{ color: textColor }}
            onClick={() => setShowForm(true)}
          />
        )}
        <h1 style={{ color: textColor }}>Inventory Tracker</h1>
        {darkMode ? (
          <BsSunFill
            className="text-xl cursor-pointer text-yellow-300"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonStarsFill
            className="text-lg cursor-pointer"
            style={{ color: textColor }}
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </nav>
    </header>
  )
}

export default Navbar
