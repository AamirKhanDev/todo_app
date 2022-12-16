import { createSlice } from "@reduxjs/toolkit"

export const slice { reducer, actions } = createSlice ({
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