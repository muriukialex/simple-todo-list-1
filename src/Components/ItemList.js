import React from "react"

const ItemList = ({ itemList, handleRemove }) => {
  if (itemList.length === 0) {
    return <div>No item in the list</div>
  }
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {itemList.map((item) => (
          <li key={item.itemID}>
            {item.itemName}{" "}
            <span>
              <button
                onClick={() => handleRemove(item.itemID)}
                style={{ cursor: "pointer" }}
              >
                ❌
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
