import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BsFillMoonStarsFill } from "react-icons/bs"
import LinkTag from "../LinkTag"

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <header>
      <nav
        className="flex items-center justify-between h-14 text-white text-lg px-4"
        style={{ backgroundColor: "#7A3BED" }}
      >
        <HiViewGrid
          onClick={() => setShowForm(!showForm)}
          className="text-2xl cursor-pointer"
        />
        <LinkTag link="" title="Inventory Tracker" />
        <BsFillMoonStarsFill className="text-lg cursor-pointer" />
      </nav>
    </header>
  )
}

export default Navbar
