import React from "react"
import { FaCalculator } from "react-icons/fa"
import { AiOutlineForm } from "react-icons/ai"

const Tools = (props) => {
  const toolsList = [
    {
      title: "Update Stock",
      icon: "far fa-edit",
      fx: props.openForm,
    },
    {
      title: "Stock Analysis",
      icon: "fas fa-chart-line",
    },
  ]

  return (
    <>
      <div className="tools mt-8 flex gap-4">
        {toolsList.map((item, index) => {
          return (
            <article
              key={index}
              className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
              onClick={item.fx}
            >
              <div className="text-2xl">
                <i className={item.icon}></i>
              </div>
              <span className="font-semibold">{item.title}</span>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Tools
