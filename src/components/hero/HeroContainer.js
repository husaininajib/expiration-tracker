import React from "react"
import Heading from "../Heading"
import Text from "../Text"
import Tools from "./Tools"

const HeroContainer = (props) => {
  return (
    <section className="px-4 mt-8">
      <Heading title="Welcome" />
      <Text />
      <div className="tools mt-8 flex gap-4">
        {props.toolsOption.map((tool, index) => {
          return <Tools key={index} tool={tool} openForm={props.setShowForm} />
        })}
      </div>
    </section>
  )
}

export default HeroContainer
