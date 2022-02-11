import React from "react"
import ListContainer from "./ContentContainer" // this one tried to make a component
import Container from "./Container"
import useCalculation from "./useCalculation"

const ProductItem = ({ product, handleAdd, handleRemove, deleteProduct }) => {
  const { countdown, weight, totalWeight, reorderPoint, toggleUnit } =
    useCalculation(product)

  return (
    <section className="w-72 mb-6">
      <article className="flex gap-4 pr-4">
        <img
          src={
            product.imageURL ? product.imageURL : "https://tinyurl.com/3ctc7svd"
          }
          alt="product-img"
          className="w-20 h-20 rounded-md"
        />
        <div className="w-full">
          <ul className="flex justify-between items-center capitalize font-semibold text-lg">
            <li>{product.productName}</li>
            <li className="font-medium text-sm bg-purple-500 px-2 rounded-md text-white">
              {product.category}
            </li>
          </ul>
          <ul className="font-medium">
            <li>
              Expired in {countdown} {countdown === 1 ? "day" : "days"}
            </li>
            <li className="font-normal text-sm mt-1">{product.expiryDate}</li>
          </ul>
        </div>
      </article>
      <article className="flex justify-between mt-3">
        <ul>
          <li className="font-medium">
            {product.quantity} PCS |{" "}
            {totalWeight % 1 !== 0 ? totalWeight.toFixed(2) : totalWeight}{" "}
            {weight.unit}
          </li>
          <li className="text-sm mt-1">In Stock</li>
        </ul>
        <ul className="w-24">
          <li className="font-medium">{reorderPoint} PCS</li>
          <li className="text-sm mt-1">Stocks level to restock</li>
        </ul>
      </article>
      <ul className="flex justify-center items-center gap-3 mt-3 text-lg">
        <li className="text-purple-700" onClick={() => toggleUnit()}>
          <i className="fas fa-exchange-alt"></i>
        </li>
        <li className="text-green-500" onClick={() => handleAdd(product.id)}>
          <i className="fas fa-plus-circle"></i>
        </li>
        <li
          className="text-purple-700"
          onClick={() => handleRemove(product.id)}
        >
          <i className="fas fa-minus-circle"></i>
        </li>
        <li className="text-red-500" onClick={() => deleteProduct(product.id)}>
          <i className="fas fa-trash"></i>
        </li>
      </ul>
    </section>
  )
}

export default ProductItem

// return (
//   <section className="w-72">
//     <article className="flex gap-4 pr-4">
//       <img
//         src="https://tinyurl.com/5jprfz4b"
//         alt=""
//         className="w-20 h-20 rounded-md"
//       />
//       <div className="w-full">
//         <ListContainer
//           items={["banana", "fruit"]}
//           classStyle={"flex justify-between capitalize font-semibold text-lg"}
//         />
//         <ListContainer items={["Expired in 3 days", "03/02/2022"]} />
//       </div>
//     </article>
//     <article className="flex justify-between">
//       <ListContainer items={["20 PCS | 20 KG", "In Stock"]} />
//       <ListContainer items={["30 PCS", "Stocks level to restock"]} />
//     </article>
//     <ListContainer
//       items={["add", "remove", "delete"]}
//       classStyle="flex justify-between"
//     />
//   </section>
// )
