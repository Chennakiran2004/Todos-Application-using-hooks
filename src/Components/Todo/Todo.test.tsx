import '@testing-library/jest-dom';

import {fireEvent, screen, render, cleanup} from '@testing-library/react'

import Todo from '../Todo'

afterEach(cleanup)

const renderComponent = () => render(<Todo/>)

describe("Todo Component", () => {

    test("displays the main heading", () =>{
        renderComponent()

        expect(screen.getByText("Todo")).toBeInTheDocument();
        
        expect(screen.getByText("Create")).toBeInTheDocument()
        
        expect(screen.getByText("Task")).toBeInTheDocument()
        
        expect(screen.getByPlaceholderText("What needs to be done?")).toBeInTheDocument()

        expect(screen.getByText("Save")).toBeInTheDocument()
    });

    test('should add a new task when clicking "Add" button', () => {

        renderComponent()

        const inputElement = screen.getByPlaceholderText("What needs to be done?");
        
        const addButton = screen.getByText("Add");

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });

        expect(addButton).not.toBeDisabled();

        fireEvent.click(addButton);

        expect(screen.getByText("Test Task")).toBeInTheDocument();
    });

    test("Button is disabled when input element is empty", () => {
        renderComponent()
        
        const inputElement = screen.getByPlaceholderText("What needs to be done?");
        
        const addButton = screen.getByText("Add");
      
        expect(inputElement).toHaveValue("");
        
        expect(addButton).toBeDisabled();
      });


    test("saves tasks when save button is clicked", () => {
        renderComponent()

        const saveButton = screen.getByText("Save")
        
        fireEvent.click(saveButton)
        
        expect(localStorage.getItem("tasksList")).not.toBeNull()
    })

    test("deletes a task", () => {
        renderComponent()
        
        const inputElement = screen.getByPlaceholderText('What needs to be done?');
        
        const addButton = screen.getByText('Add');
    
        fireEvent.change(inputElement, { target: { value: 'Test Task' } });
        
        fireEvent.click(addButton);
    
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    
        const deleteButton = screen.getByLabelText('Delete task');
        
        fireEvent.click(deleteButton);
    
        expect(screen.queryByText('Test Task')).not.toBeInTheDocument();    
            
    })

    test("toggle it's completion status", () => {
        renderComponent()

        const input = screen.getByPlaceholderText('What needs to be done?');

        const addButton = screen.getByText('Add');
    
        fireEvent.change(input, { target: { value: 'Test Task' } });
        
        fireEvent.click(addButton);
    
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    
        const checkbox = screen.getByRole('checkbox');
        
        fireEvent.click(checkbox);
    
        const completedLabel = screen.getByText('Test Task');
        
        expect(completedLabel).toHaveStyle('text-decoration: line-through'); 
    
        fireEvent.click(checkbox);
    
        expect(completedLabel).toHaveStyle('text-decoration: none');
    })
});

