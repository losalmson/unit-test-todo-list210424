
import { Todo } from "../models/Todo";
import { createHtml } from "./htmlFunctions";

export const addTodo = (todo: Todo, todos: Todo[]) => {
    if (todo.text !== "") {
        todos.push(todo);
    }
    createHtml(todos);
};

export const removeTodo = (i: number, todos: Todo[]) => {
    todos.splice(i, 1);
};

export const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done;
};