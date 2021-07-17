import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { addTodo } from "../../actions/todo";
import "./TodoList.css";
import ToDoItem from "../ToDoItem/ToDoItem";
import { Todo } from "../../types/todo";
interface Props {}

export const TodoList: React.FC = (props: Props) => {
      const [inputTodo, setInputTodo] = useState<string>("");
      const dispatch = useDispatch();
      const todoList = useSelector((state: AppState) => state.todoList.todoList);

      const handleOnSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            dispatch(addTodo(inputTodo));
            setInputTodo("");
      };
      const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => setInputTodo(e.target.value);

      const countTodo = (todoList: Todo[]) => {
            const completed = todoList.filter((x) => x.completed === true).length;
            const unCompleted = todoList.filter((x) => x.completed === false).length;
            return { completed, unCompleted };
      };
      const { completed, unCompleted }: { completed: number; unCompleted: number } = useMemo(
            () => countTodo(todoList),
            [todoList]
      );
      return (
            <div className="todo">
                  <div className="todo__count">
                        Completed: {completed} Uncompeted: {unCompleted}
                  </div>
                  <form onSubmit={handleOnSubmitForm} className="todo__form">
                        <input
                              placeholder="Input your Todo here ..."
                              value={inputTodo}
                              onChange={handleOnChangeInput}
                              className="todo__input"></input>
                  </form>
                  <div className="todo__items">
                        {todoList.length !== 0 ? (
                              todoList.map((item, index) => <ToDoItem key={index} todoItem={item} />)
                        ) : (
                              <div> You don't have any To Do Item</div>
                        )}
                  </div>
            </div>
      );
};
