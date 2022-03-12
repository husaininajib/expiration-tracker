import React from "react"
import ButtonEdit from "../ButtonEdit/ButtonEdit"
// import ListContainer from "./ContentContainer" // this one tried to make a component
// import Container from "./Container"
import useCalculation from "../custom-hooks/useCalculation"

const ProductItem = ({ product, handleAdd, handleRemove, deleteProduct }) => {
  const { countdown, weight, totalWeight, reorderPoint, toggleUnit } =
    useCalculation(product)

  return (
    <section className="w-full bg-purple-200 p-4 rounded-lg">
      <article className="flex gap-4">
        <img
          src={
            product.imageURL ? product.imageURL : "https://tinyurl.com/3ctc7svd"
          }
          alt="product-img"
          className="w-20 h-20 rounded-md"
        />
        <div className="w-full">
          <div className="flex justify-between items-center capitalize font-semibold text-lg">
            <h2>{product.productName}</h2>
            <span className="font-medium text-sm bg-purple-500 px-2 rounded-md text-white">
              {product.category}
            </span>
          </div>
          <div>
            <h3 className="font-medium">
              Expired in {countdown} {countdown === 1 ? "day" : "days"}
            </h3>
            <h4 className="font-normal text-sm mt-1">{product.expiryDate}</h4>
          </div>
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
      <div className="flex justify-center items-center gap-3 mt-3 text-lg">
        <ButtonEdit
          buttonStyle="text-purple-700"
          deleteProduct={() => toggleUnit()}
          icon="fas fa-exchange-alt"
        />
        <ButtonEdit
          buttonStyle="text-green-500"
          deleteProduct={() => handleAdd(product.id)}
          icon="fas fa-plus-circle"
        />
        <ButtonEdit
          buttonStyle="text-purple-700"
          deleteProduct={() => handleRemove(product.id)}
          icon="fas fa-minus-circle"
        />
        <ButtonEdit
          buttonStyle="text-red-500"
          deleteProduct={() => deleteProduct(product.id)}
          icon="fas fa-trash"
        />
      </div>
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
