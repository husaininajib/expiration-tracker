import React from "react"
import Label from "../components/Label/Label"
import Input from "../Input/Input"
import optionData from "../components/Option/data/optionData"
import Option from "../components/Option/Option"

const Form = ({
  darkMode,
  showForm,
  formData,
  handleChange,
  submitFormData,
}) => {
  const formContainerStyle = {
    backgroundColor: darkMode ? "#000000" : "#f8f9d2",
    backgroundImage: darkMode
      ? ""
      : "linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)",
  }
  return (
    <div
      className={`wrapper form-container flex flex-col items-center ${
        showForm ? "show" : ""
      }`}
      style={formContainerStyle}
    >
      <form action="" className="grid gap-2 mt-12" onSubmit={submitFormData}>
        <div className="grid">
          <Label
            htmlFor="category"
            title="Category *"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          {/* <Input
            type="text"
            name="category"
            value={formData.category}
            handleChange={handleChange}
          /> */}
          <select
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={handleChange}
            value={formData.category}
          >
            {optionData.map((item, index) => {
              return <Option key={index} value={item} />
            })}
          </select>
        </div>
        <div className="grid">
          <Label
            htmlFor="productName"
            title="Product Name *"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="text"
            name="productName"
            value={formData.productName}
            handleChange={handleChange}
          />
        </div>
        {/* <div className="grid">
          <Label htmlFor="productCode" title="Product Code" />
          <Input
            type="text"
            name="productCode"
            value={formData.productCode}
            handleChange={handleChange}
          />
        </div> */}
        <div className="grid">
          <Label
            htmlFor="imageURL"
            title="Product Image (in URL)"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label
            htmlFor="expiryDate"
            title="Expiry Date *"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label
            htmlFor="quantity"
            title="Quantity *"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="number"
            name="quantity"
            value={formData.quantity}
            handleChange={handleChange}
          />
        </div>
        <article className="flex gap-3">
          <div className="grid grow">
            <Label
              htmlFor="weightPerQuantity"
              title="Weight *"
              textColor={darkMode ? "#c8c8c8" : ""}
            />
            <Input
              type="number"
              name="weightPerQuantity"
              value={formData.weightPerQuantity}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Label
              htmlFor="weightUnit"
              title="Unit *"
              textColor={darkMode ? "#c8c8c8" : ""}
            />
            <select
              name="weightUnit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
              value={formData.weightUnit}
            >
              <option value="kg">Kg</option>
              <option value="gram">Gram</option>
            </select>
          </div>
        </article>
        <div className="grid">
          <Label
            htmlFor="averageSalesPerDay"
            title="Average Product sold Per Day"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="number"
            name="averageSalesPerDay"
            value={formData.averageSalesPerDay}
            handleChange={handleChange}
          />
        </div>
        <div className="grid">
          <Label
            htmlFor="daysToReceiveNewStock"
            title="Days Taken To Receive New Stock"
            textColor={darkMode ? "#c8c8c8" : ""}
          />
          <Input
            type="number"
            name="daysToReceiveNewStock"
            value={formData.daysToReceiveNewStock}
            handleChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
