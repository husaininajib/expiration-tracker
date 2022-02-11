import React from "react"

const ListContainer = (props) => {
  return (
    <ul className={props.classStyle}>
      {props.items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
      {/* <li>{props.item}</li>
      <li>{props.item}</li>
      <li>{props.item}</li> */}
    </ul>
  )
}

export default ListContainer
