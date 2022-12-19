import { createSlice } from "@reduxjs/toolkit"

export const { reducer, actions } = createSlice ({
  name: "todos",
  initialState: {
    todos: [
      {
        id : 1,
        text: "This is my first todo",
        isComplete : true
      },
      {
        id : 2,
        text: "This is my second todo",
        isComplete : false
      }
    ],
      isLoading : false
  },
  reducers: {
    clearTodos (state) {
      state.todos = []
      state.numDispatches = 0
    }
  },
  extraReducers ({addCase}) {}
})