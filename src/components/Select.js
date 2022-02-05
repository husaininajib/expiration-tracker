import React from "react"

const Select = (props) => {
  return (
    <div>
      <label htmlFor="">Unit</label>
      <select name="unitSKU" id="">
        {props.option.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
        {/* <option value="ctn">ctn</option>
        <option value="pkt">pkt</option> */}
      </select>
    </div>
  )
}

export default Select
