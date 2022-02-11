import React from "react"
import Heading from "../Heading"
import Text from "../Text"
import Tools from "./Tools"

const HeroContainer = ({ reorderStock, setShowForm, setShowReorderList }) => {
  return (
    <section className="px-4 mt-8">
      <Heading title="Welcome" />
      <Text />
      <div className="tools mt-8 flex gap-4">
        {/* {props.toolsOption.map((tool, index) => {
          return <Tools key={index} tool={tool} openForm={props.setShowForm} />
        })} */}
        <article
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          <div className="text-2xl">
            <i className="far fa-edit"></i>
          </div>
          <span className="font-semibold">Update Stock</span>
        </article>
        <article
          className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
          onClick={() => setShowReorderList(true)}
        >
          <div className="text-2xl">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <span className="font-semibold">Restock Item</span>
          <span>{reorderStock.length}</span>
        </article>
      </div>
    </section>
  )
}

export default HeroContainer
