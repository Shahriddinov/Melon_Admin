import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../services/api/request";

export const signIn = createAsyncThunk("signIn", async (payload) => {
  try {
    const res = await request.post('/login', payload?.userData)
    return res.data
  } catch (error) {
    return error
  }
});
