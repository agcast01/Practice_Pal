import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSessions = createAsyncThunk("loadSessions", async (payload) => {
  try {
    const response = await fetch(`http://172.28.192.1:3000/sessions/${payload}`)
    if(!response.ok) throw new Error("Error")
    const data = await response.json();
    return data
  } catch (e) {
    console.log(e)
  }
})

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(loadSessions.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(loadSessions.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload;
    }),
    builder.addCase(loadSessions.rejected, (state, action) => {
      state.isLoading = false
    })
  }
})

export default sessionsSlice.reducer
