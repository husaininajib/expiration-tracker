import React from "react"
import Heading from "../Heading/Heading"
import Text from "../Text/Text"
import { FiEdit } from "react-icons/fi"

const HeroContainer = ({
  darkMode,
  reorderStock,
  setShowForm,
  setShowReorderList,
}) => {
  const textColor = darkMode ? "#c8c8c8" : "#000000"
  return (
    <section className="wrapper px-4 pt-8 text-center">
      <Heading title="Welcome" textColor={textColor} />
      <Text
        content="Track your inventory life and reduce waste and spoilage."
        classStyle="text-base mt-1"
        textColor={textColor}
      />
      <article className="tools mt-8 flex gap-4 justify-center ">
        <button
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          style={{ backgroundColor: "#d8c6f8" }}
          onClick={() => setShowForm(true)}
        >
          <FiEdit className="text-2xl" />
          <Text classStyle="font-semibold" content="Update Stock" />
        </button>
        <button
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          style={{ backgroundColor: "#f9e1d5" }}
          onClick={() => setShowReorderList(true)}
        >
          <span className="font-semibold text-xl">{reorderStock.length}</span>
          <Text
            classStyle="font-semibold"
            content={
              reorderStock.length < 2 ? "Item to restock" : "Items to restock"
            }
          />
        </button>
      </article>
    </section>
  )
}

export default HeroContainer
