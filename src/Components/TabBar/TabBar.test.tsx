import { fireEvent, render, screen } from "@testing-library/react"

import '@testing-library/jest-dom';


import TabBar from "../TabBar"

const mockChangeActiveTabFunction = jest.fn()

const renderComponent = () => render(<TabBar activeTab="all" changeActiveTab={mockChangeActiveTabFunction}/>);

describe("TabBar Component", () => {
  test("Renders TabBar correctly", () => {
    renderComponent();

    expect(screen.getByText("All Todos")).toBeInTheDocument()

    expect(screen.getByText("Active Todos")).toBeInTheDocument()

    expect(screen.getByText("Completed Todos")).toBeInTheDocument()

  });

  test("calls changeActiveTab when tab is clicked", () => {
    renderComponent()

    const allTodos = screen.getByText("All Todos")
    const activeTodos = screen.getByText("Active Todos")
    const completedTodos = screen.getByText("Completed Todos")


    fireEvent.click(allTodos)
    expect(mockChangeActiveTabFunction).toHaveBeenCalledWith("all")


    fireEvent.click(activeTodos)
    expect(mockChangeActiveTabFunction).toHaveBeenCalledWith("active")


    fireEvent.click(completedTodos)
    expect(mockChangeActiveTabFunction).toHaveBeenCalledWith("completed")
  })
});