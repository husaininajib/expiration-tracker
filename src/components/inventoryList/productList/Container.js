import React from "react"
import ContentContainer from "./ContentContainer"

const SectionContainer = () => {
  return (
    <article className="flex gap-4 pr-4">
      <img
        src="https://tinyurl.com/5jprfz4b"
        alt=""
        className="w-20 h-20 rounded-md"
      />
      <div className="w-full">
        <ContentContainer
          items={["banana", "fruit"]}
          classStyle={"flex justify-between"}
        />
        <ContentContainer items={["Expired in 3 days", "03/02/2022"]} />
      </div>
    </article>
  )
}

export default SectionContainer