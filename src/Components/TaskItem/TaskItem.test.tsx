import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';

describe("TaskItem component", () => {
    const mockDeleteTask = jest.fn();
    const mockToggleTaskCompletion = jest.fn();

    const initialTaskDetails = {
        id: "1",
        task: "Test Task",
        completed: false,
    };

    const updatedTaskDetails = {
        ...initialTaskDetails,
        completed: true,
    };

    test("renders the task correctly and toggles task completion", () => {
        const { rerender } = render(
            <TaskItem
                taskDetails={initialTaskDetails}
                deleteTask={mockDeleteTask}
                toggleTaskCompletion={mockToggleTaskCompletion}
            />
        );

        const checkbox = screen.getByLabelText('checkbox');
        
        expect(checkbox).not.toBeChecked();
        
        expect(screen.getByText('Test Task')).toHaveStyle('text-decoration: none');

        fireEvent.click(checkbox);

        expect(mockToggleTaskCompletion).toHaveBeenCalledWith("1");

        rerender(
            <TaskItem
                taskDetails={updatedTaskDetails}
                deleteTask={mockDeleteTask}
                toggleTaskCompletion={mockToggleTaskCompletion}
            />
        );

        expect(screen.getByLabelText('checkbox')).toBeChecked();
        
        expect(screen.getByText('Test Task')).toHaveStyle('text-decoration: line-through');
    });

    test("should call deleteTask when delete button is clicked", () => {
        render(
            <TaskItem
                taskDetails={initialTaskDetails}
                deleteTask={mockDeleteTask}
                toggleTaskCompletion={mockToggleTaskCompletion}
            />
        );

        const deleteButton = screen.getByLabelText('Delete task');
        
        fireEvent.click(deleteButton);
        
        expect(mockDeleteTask).toHaveBeenCalledWith('1');
    });
});
