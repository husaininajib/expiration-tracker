import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BsFillMoonStarsFill } from "react-icons/bs"

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <header>
      <nav
        className="flex items-center justify-between h-14 text-white text-lg px-4"
        style={{ backgroundColor: "#7A3BED" }}
      >
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setShowForm(!showForm)}
        >
          <HiViewGrid />
        </div>
        <a href="">Inventory Tracker</a>
        <div className="text-lg cursor-pointer">
          <BsFillMoonStarsFill />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
