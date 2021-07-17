import { AppActions, EditObject } from "../types/actions";

export const addTodo = (todo: string): AppActions => ({
      type: "ADD_TODO",
      payload: todo,
});
export const editTodo = (editObject: EditObject): AppActions => ({
      type: "EDIT_TODO",
      payload: editObject,
});
export const deleteTodo = (todo: string): AppActions => ({
      type: "DELETE_TODO",
      payload: todo,
});
export const markCompletedTodo = (todo: string): AppActions => ({
      type: "MARK_COMPLETE_TODO",
      payload: todo,
});
