import React, { useEffect, useState } from "react";
import { Todo } from "../../types/todo";
import { markCompletedTodo, editTodo, deleteTodo } from "../../actions/todo";
import { useDispatch } from "react-redux";
import "./ToDoItem.css";

interface Props {
      todoItem: Todo;
}

const ToDoItem = ({ todoItem: { name, completed } }: Props) => {
      const [isEditable, setIsEditable] = useState<Boolean>(false);
      const [currentInput, setCurrentInput] = useState<string>("");
      const dispatch = useDispatch();
      const handleMarkCompleted = (e: React.MouseEvent<HTMLElement>, name: string) => {
            dispatch(markCompletedTodo(name));
      };

      const handleDeleteItem = (e: React.MouseEvent<HTMLElement>, name: string) => {
            e.stopPropagation();
            dispatch(deleteTodo(name));
      };
      useEffect(() => {
            setCurrentInput(name);
      }, [name]);
      const handleSubmitEdit = (e: any) => {
            if (e.key === "Enter") {
                  dispatch(
                        editTodo({
                              currentValue: name,
                              newValue: currentInput,
                        })
                  );
                  e.target.blur();
            }
      };
      return (
            <div className="todoItem">
                  {!isEditable ? (
                        <div
                              onClick={() => setIsEditable(!isEditable)}
                              className={`todoItem__input ${completed ? "completed" : ""}`}>
                              {name}
                        </div>
                  ) : (
                        <input
                              // ref={inputRef}
                              className={`todoItem__input  border`}
                              value={currentInput}
                              autoFocus
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentInput(e.target.value)}
                              onBlur={() => setIsEditable(!isEditable)}
                              onKeyPress={handleSubmitEdit}
                        />
                  )}
                  <div className="todoItem__actions">
                        <button className="btn__markCompleted" onClick={(e) => handleMarkCompleted(e, name)}>
                              {completed ? "Uncomplete" : "Complete"}
                        </button>
                        <button className="btn__delete" onClick={(e) => handleDeleteItem(e, name)}>
                              X
                        </button>
                  </div>
            </div>
      );
};

export default ToDoItem;
