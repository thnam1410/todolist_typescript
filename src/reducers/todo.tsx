import { Todo, TodoState } from "../types/todo";
import { TodoActionTypes } from "../types/actions";
const todoInitialState: TodoState = {
      todoList: [],
};

const todoReducer = (state = todoInitialState, action: TodoActionTypes): TodoState => {
      switch (action.type) {
            case "ADD_TODO": {
                  const newList: Todo[] = [...state.todoList];
                  newList.push({
                        name: action.payload,
                        completed: false,
                  });
                  return {
                        ...state,
                        todoList: newList,
                  };
            }
            case "EDIT_TODO": {
                  const { currentValue, newValue } = action.payload;
                  const newList = [...state.todoList].map((item) => {
                        return item.name === currentValue
                              ? {
                                      ...item,
                                      name: newValue,
                                }
                              : item;
                  });
                  return {
                        ...state,
                        todoList: newList,
                  };
            }
            case "DELETE_TODO": {
                  const newList = [...state.todoList].filter((item) => item.name !== action.payload);
                  return {
                        ...state,
                        todoList: newList,
                  };
            }
            case "MARK_COMPLETE_TODO": {
                  const newList = [...state.todoList].map((item) =>
                        item.name === action.payload ? { ...item, completed: !item.completed } : item
                  );
                  return {
                        ...state,
                        todoList: newList,
                  };
            }
            default: {
                  return {
                        ...state,
                  };
            }
      }
};
export default todoReducer;
