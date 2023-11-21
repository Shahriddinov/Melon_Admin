import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./extraReducer";

const initialState = {
  token: localStorage.getItem("token") || null,
  message: "",
  loginLoading: true,
  success: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("token")
    },
    loginUser: (state, { payload }) => {
      const { user } = payload;
      state.token = user.token;
      localStorage.setItem("token", user.token);
      if (user.adminProfile) {
        state.userData = user.adminProfile;
        localStorage.setItem("user", JSON.stringify(user.adminProfile));
      }
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    } 
  },
  extraReducers: (build) => {
    build
      .addCase(signIn.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loginLoading = false;
        if (action.payload?.access_token) {
          state.token = action.payload?.access_token;
          localStorage.setItem("token", action.payload?.access_token)
        }if(action.payload?.response?.data.status === 400) {
          state.error = action.payload?.response?.data.message 
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.payload?.response?.data.message;
      });
  }
});
export const { removeToken, loginUser, changeStatus, logout } = authSlice.actions;
export default authSlice.reducer;
