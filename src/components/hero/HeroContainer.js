import React from "react"
import Heading from "../Heading"
import Text from "../Text"
import { FiEdit } from "react-icons/fi"
import { BsExclamationTriangle } from "react-icons/bs"
import Tools from "./Tools"

const HeroContainer = ({ reorderStock, setShowForm, setShowReorderList }) => {
  const styleBox =
    "card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"

  const content = "Track your inventory life and reduce waste and spoilage."
  return (
    <section className="px-4 mt-8">
      <Heading title="Welcome" />
      <Text content={content} classStyle="text-base mt-1" />
      <article className="tools mt-8 flex gap-4">
        <div className={styleBox} onClick={() => setShowForm(true)}>
          <FiEdit className="text-2xl" />
          <Text classStyle="font-semibold" content="Update Stock" />
        </div>
        <div className={styleBox} onClick={() => setShowReorderList(true)}>
          <BsExclamationTriangle className="text-2xl" />
          <Text classStyle="font-semibold" content="Restock Item" />
          <Text content={reorderStock.length} />
        </div>
      </article>
    </section>
  )
}

export default HeroContainer
