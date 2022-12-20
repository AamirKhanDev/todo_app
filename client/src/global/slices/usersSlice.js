import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import thunkPromiseHandler from "../../scripts/thunkPromiseHandler"

export const thunks = {
  register : createAsyncThunk("auth/register", async (form, thunkAPI) => (
      thunkPromiseHandler(axios.post("/api/users/register", form), thunkAPI)
  )),
  login : createAsyncThunk("auth/login", async (form, thunkAPI) => (
      thunkPromiseHandler(axios.post("/api/users/login", form), thunkAPI)
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

  extraReducers ({addCase}) {
    helper.methods.forEach((n) => {
        addCase(thunks[n].pending, helper.registerAndLoginPending)// Pending
        addCase(thunks[n].fulfilled, helper.registerAndLoginFulfilled)// Fulfilled
        addCase(thunks[n].rejected, helper.registerAndLoginRejected)// Rejected
    })
  }
})

const helper = {
  methods : ["login", "register"],
  registerAndLoginPending(state) {
      state.isLoading = true
  },
  registerAndLoginFulfilled(state, { payload:user }) {
      state.isLoading = false
      state.user = user
      window.localStorage.setItem("user", JSON.stringify(user))
  },
  registerAndLoginRejected(state, { payload:errorMessage }) {
      alert(errorMessage || "Auth Rejected")
      state.isLoading = false
  }
}