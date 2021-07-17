import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo";
export const rootReducer = combineReducers({
      todoList: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
