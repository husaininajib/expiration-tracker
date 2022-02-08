import React from "react"

const Tools = ({ tool, openForm }) => {
  return (
    <article
      className="card grid gap-2 place-items-center w-40 py-8 rounded-xl border cursor-pointer"
      onClick={() => openForm(true)}
    >
      <div className="text-2xl">
        <i className={tool.icon}></i>
      </div>
      <span className="font-semibold">{tool.title}</span>
    </article>
  )
}

export default Tools
