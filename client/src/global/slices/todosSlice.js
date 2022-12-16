import { createSlice } from "@reduxjs/toolkit"

export const { reducer, actions } = createSlice ({
  name: "todos",
  initialState: {
    isLoading: false,
    todos: [],
  },
  reducers: {
    clearTodos () {

    }
  },
  extraReducers () {

  }
})