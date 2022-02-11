import React from "react"

const LinkTag = (props) => {
  return (
    <a href={props.link} className={props.classStyle}>
      {props.title}
    </a>
  )
}

export default LinkTag
