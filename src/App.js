import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { v4 as uuidv4 } from "uuid"
import "./App.css"

//components
import ItemList from "./Components/ItemList"

function App() {
  const { register, handleSubmit, reset } = useForm()

  const [itemList, setItemList] = useState(
    []
  ) /*itemList = [ {itemName:"item 1", itemID: "8833771!@#321"} ] */

  const handleRemove = (itemID) => {
    const newList = itemList.filter((item) => item.itemID !== itemID)
    setItemList(newList)
  }

  const onSubmit = (data) => {
    console.log(data)
    setItemList([
      ...itemList,
      {
        itemName: data.itemName,
        itemID: uuidv4(),
      },
    ])

    reset()
  }

  useEffect(() => {
    console.log(itemList)
  }, [itemList])

  return (
    <div className="App">
      <h1>Here is a list of Items</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input id="itemName" type="text" {...register("itemName")} required />
        <input type="submit" value="add item" />
      </form>

      <ItemList itemList={itemList} handleRemove={handleRemove} />
    </div>
  )
}

export default App
