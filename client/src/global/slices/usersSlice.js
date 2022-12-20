import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import thunkPromiseHandler from "../../scripts/thunkPromiseHandler"

export const thunks = {
  register : createAsyncThunk("auth/register", async (form, T) => (
      thunkPromiseHandler(axios.post("/api/users/register", form), T)
  )),
  login : createAsyncThunk("auth/login", async (form, T) => (
      thunkPromiseHandler(axios.post("/api/users/login", form), T)
  ))
}

const login = createAsyncThunk("")

//Promise states : pending/fulfilled/rejected

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