import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { LOGIN } from "../../services/api/utils";

export const signIn = createAsyncThunk("signIn", async (payload) => {
  return await axios
    .post(LOGIN, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response.data);
});
