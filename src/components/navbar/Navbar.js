import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import LinkTag from "../LinkTag"

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <header className="" style={{ backgroundColor: "#7A3BED" }}>
      <nav className="wrapper flex items-center justify-between h-14 text-white text-lg px-4">
        {showForm ? (
          <FaTimes
            onClick={() => setShowForm(!showForm)}
            className="text-xl cursor-pointer"
          />
        ) : (
          <HiViewGrid
            onClick={() => setShowForm(!showForm)}
            className="text-2xl cursor-pointer"
          />
        )}

        <LinkTag link="" title="Inventory Tracker" />
        <BsFillMoonStarsFill className="text-lg cursor-pointer" />
      </nav>
    </header>
  )
}

export default Navbar
