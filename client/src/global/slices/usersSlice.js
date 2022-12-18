import { createSlice } from "@reduxjs/toolkit"

export const { reducer, actions } = createSlice ({
  name: "users",
  initialState: {
    isLoading: false,
    user: {email: "a@a.com"}
  },
  reducers: {
    logout () {

    }
  },
  extraReducers () {

  }
})