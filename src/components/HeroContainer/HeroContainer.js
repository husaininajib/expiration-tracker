import React from "react"
import Heading from "../Heading/Heading"
import Text from "../Text/Text"
import { FiEdit } from "react-icons/fi"

const HeroContainer = ({ reorderStock, setShowForm, setShowReorderList }) => {
  return (
    <section className="px-4 mt-8 text-center">
      <Heading title="Welcome" />
      <Text
        content="Track your inventory life and reduce waste and spoilage."
        classStyle="text-base mt-1"
      />
      <article className="tools mt-8 flex gap-4 justify-center ">
        <button
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          <FiEdit className="text-2xl" />
          <Text classStyle="font-semibold" content="Update Stock" />
        </button>
        <button
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          onClick={() => setShowReorderList(true)}
        >
          <span className="font-semibold text-xl">{reorderStock.length}</span>
          <Text classStyle="font-semibold" content="Item to restock" />
        </button>
      </article>
    </section>
  )
}

export default HeroContainer
