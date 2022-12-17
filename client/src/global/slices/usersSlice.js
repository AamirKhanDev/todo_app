import { createSlice } from "@reduxjs/toolkit"

export const { reducer, actions } = createSlice ({
  name: "users",
  initialState: {
    isLoading: false,
    user: null
  },
  reducers: {
    logout () {

    }
  },
  extraReducers () {

  }
})