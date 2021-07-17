export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_COMPLETE_TODO = "MARK_COMPLETE_TODO";

export interface EditObject {
      currentValue: string;
      newValue: string;
}

export interface AddTodo {
      type: typeof ADD_TODO;
      payload: string;
}
export interface EditTodo {
      type: typeof EDIT_TODO;
      payload: EditObject;
}
export interface DeleteTodo {
      type: typeof DELETE_TODO;
      payload: string;
}
export interface MarkCompleteTodo {
      type: typeof MARK_COMPLETE_TODO;
      payload: string;
}

export type TodoActionTypes = AddTodo | EditTodo | DeleteTodo | MarkCompleteTodo;
export type AppActions = TodoActionTypes;
