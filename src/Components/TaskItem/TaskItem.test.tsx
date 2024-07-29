import '@testing-library/jest-dom';

import TaskItem from '../TaskItem';

import {fireEvent, render, screen } from '@testing-library/react';
import { TasksList } from '../Todo/styledComponents';

describe("TaskItem component", () => {
    const mockDeleteTask = jest.fn()
    const mockToggleTaskCompletion = jest.fn()

    const taskDetails = {
        id: "1",
        task: "Test Task",
        completed: false,
    }

    beforeEach(() => {
        render(
            <TaskItem
            taskDetails={taskDetails}
            deleteTask={mockDeleteTask}
            toggleTaskCompletion={mockToggleTaskCompletion}
          />
        )
    })

    test("render the task correctly", () => {
        expect(screen.getByText("Test Task")).toBeInTheDocument()
    })


    test("should call deleteTask when delete button is clicked", () => {
        const deleteButton = screen.getByLabelText('Delete task');
        fireEvent.click(deleteButton);
        expect(mockDeleteTask).toHaveBeenCalledWith('1');
    })

    test("should toggle task completion when checkbox is clicked", () => {
        const checkbox = screen.getByRole('checkbox');
    
        fireEvent.click(checkbox);
        expect(mockToggleTaskCompletion).toHaveBeenCalledWith('1'); 
    
        const updatedTaskDetails = {
          ...taskDetails,
          completed: true,
        };
    
        render(
          <TaskItem
            taskDetails={updatedTaskDetails}
            deleteTask={mockDeleteTask}
            toggleTaskCompletion={mockToggleTaskCompletion}
          />
        );
    
        expect(checkbox).toBeChecked();
        expect(screen.getByText('Test Task')).toHaveStyle('text-decoration: line-through'); 
      });
})