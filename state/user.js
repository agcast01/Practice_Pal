import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login", async (payload) => {
  try {
    console.log("Action Payload: ", JSON.stringify(payload))
    const response = await fetch('http://172.19.224.1:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const data = await response.json();
    console.log("User: ", data)

    return data;
  } catch (e){
    console.log(e.message)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(login.rejected), (state, action) => {
      state.error = true;
    }
  }
})

export default userSlice.reducer
