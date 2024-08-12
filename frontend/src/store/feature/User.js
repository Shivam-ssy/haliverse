import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config.js"

const initialState = {
    teachers: undefined,
    students:undefined,
    isLoading: false,
    error:undefined
  };
  export const registerStudent = createAsyncThunk(
    "user/registerStudent",
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post(`${config.backendUrl}/${config.apiEndPoint}/create/create-student`,userData, {
         
          withCredentials:true
        });
        return response.data.user;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors);
      }
    }
  );
  export const registerTeacher = createAsyncThunk(
    "user/registerTeacher",
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post(`${config.backendUrl}/${config.apiEndPoint}/create/create-teacher`,userData, {
         
         withCredentials:true,
        });
        return response.data.user;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors);
      }
    }
  );
  export const getTeachers = createAsyncThunk(
    "user/getTeachers",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${config.backendUrl}/${config.apiEndPoint}/users/get-teacher`, {
        withCredentials:true,
        });
        return response.data.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );
  export const getStudents = createAsyncThunk(
    "user/getStudents",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${config.backendUrl}/${config.apiEndPoint}/users/get-student`, {
        withCredentials:true,
        });
        console.log(response);
        
        return response.data.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );


  const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(registerStudent.pending,(state)=>{
          state.isLoading=true
        })
        .addCase(registerStudent.fulfilled,(state)=>{
          state.isLoading=false
        })
        .addCase(registerStudent.rejected,(state,action)=>{
          state.isLoading=false
          state.error=action.payload
        })
        .addCase(registerTeacher.pending,(state)=>{
          state.isLoading=false
        })
        .addCase(registerTeacher.fulfilled,(state)=>{
          state.isLoading=false
        })
        .addCase(registerTeacher.rejected,(state,action)=>{
          state.isLoading=false
          state.error=action.payload
        })
        .addCase(getTeachers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getTeachers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.teachers = action.payload;
        })
        .addCase(getTeachers.rejected, (state) => {
          state.isLoading = false;
        })
        .addCase(getStudents.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getStudents.fulfilled, (state, action) => {
          state.isLoading = false;
          state.students = action.payload;
        })
        .addCase(getStudents.rejected, (state) => {
          state.isLoading = false;
        })
    },
  });

  export default userSlice.reducer
  