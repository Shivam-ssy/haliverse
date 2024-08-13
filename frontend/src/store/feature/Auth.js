import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config.js"
const initialState = {
  currentUser: undefined,
  isLoading: false,
  error:undefined
};



export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
       `${config.backendUrl}/${config.apiEndPoint}/users/login`,
        
          userData,{
            withCredentials:true,
          }
        
      );
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${config.backendUrl}/${config.apiEndPoint}/users/current-user`, {
      withCredentials:true,
      });
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state,action) => {
        state.isLoading = false;
        state.error=action.payload
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      });
      
  },
});

export default authSlice.reducer;
