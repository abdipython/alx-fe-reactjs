import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Enter todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

