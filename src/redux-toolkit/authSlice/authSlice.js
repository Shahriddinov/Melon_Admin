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
  },
  extraReducers: (build) => {
    console.log(build);
    build
      .addCase(signIn.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.token = action.payload.data.access_token;
        console.log(action.payload.data);
        localStorage.setItem("token", action.payload.data.access_token)
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.message;
      });
  }
});
export const { removeToken, loginUser, changeStatus } = authSlice.actions;
export default authSlice.reducer;
