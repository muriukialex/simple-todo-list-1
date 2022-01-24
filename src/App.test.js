import { render, screen } from "@testing-library/react"
import App from "./App"
import ItemList from "./Components/ItemList"

test("renders the application header element correctly", () => {
  render(<App />)
  const headingElement = screen.getByText(/Here is a list of Items/i)
  expect(headingElement).toBeInTheDocument()
})

test("renders no item in list on first render", () => {
  render(<App />)
  const noItemMessage = screen.getByText(/No item in the list/i)
  expect(noItemMessage).toBeInTheDocument()
})

test("renders 'No item in list' when itemlist is empty", () => {
  render(<ItemList itemList={[]} />)
  expect(screen.getByText(/No item in the list/i)).toBeInTheDocument()
})

test("renders list of items correctly", () => {
  render(
    <ItemList
      itemList={[
        { itemID: "c44c7d53-1dcf-4a56-86ab-d634c03f379f", itemName: "item 1" },
        { itemID: "610c41c8-8a54-4ec5-b988-9a41a72f9e45", itemName: "item 2" },
        { itemID: "2e4403a2-60d0-408e-ba4d-1e0f69c5e2ab", itemName: "item 3" },
      ]}
    />
  )

  expect(screen.getByText(/item 1/i)).toBeInTheDocument()
  expect(screen.getByText(/item 2/i)).toBeInTheDocument()
  expect(screen.getByText(/item 3/i)).toBeInTheDocument()
})
