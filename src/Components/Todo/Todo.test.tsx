import '@testing-library/jest-dom';

import {fireEvent, screen, render, cleanup} from '@testing-library/react'

import Todo from '../Todo'

afterEach(cleanup)

describe("Todo Component", () => {
    test("displays the main heading", () =>{
        render(<Todo />)
        expect(screen.getByText("Todo")).toBeInTheDocument();
        expect(screen.getByText("Create")).toBeInTheDocument()
        expect(screen.getByText("Task")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("What needs to be done?"))
    });

    test('should add a new task when clicking "Add" button', () => {
        render(<Todo />);


        const inputElement = screen.getByPlaceholderText("What needs to be done?");
        const addButton = screen.getByText("Add");

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });

        expect(addButton).not.toBeDisabled();

        fireEvent.click(addButton);

        expect(screen.getByText("Test Task")).toBeInTheDocument();
    });

    test("input element is empty", () => {
        render(<Todo />);
        const inputElement = screen.getByPlaceholderText("What needs to be done?");
        
        const addButton = screen.getByText("Add");
      
        expect(inputElement).toHaveValue("");
        
        expect(addButton).toBeDisabled();
      });

     
});

