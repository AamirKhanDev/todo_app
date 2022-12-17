import { configureStore } from "@reduxjs/toolkit";
import { reducer as usersReducer } from "./slices/usersSlice";
import { reducer as todosReducer } from "./slices/todosSlice";

export default configureStore ({
  reducer : {
    users : usersReducer,
    todos : todosReducer,
  }
})