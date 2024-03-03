import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login", async (payload) => {
  try {
    //console.log("Action Payload: ", JSON.stringify(payload))
    const response = await fetch('http://172.28.192.1:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if(!response.ok) throw new Error("User not found that matches email and password combo")
    const data = await response.json();
    //console.log("User: ", data);

    return data;
  } catch (e){
    console.log(e.message)
  }
})

export const signup = createAsyncThunk("signup", async(payload) => {
  try {
    const response = await fetch('http://172.28.192.1:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("Email must be unique.")
    const data = await response.json()
  //console.log("User: ", data);

  return data
  } catch (error) {
    console.log(error.message)
  }
})


export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    logout: (state) => {
      state.data = null;
    }
  },
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
    };
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = true;
    })
  }
})

export default userSlice.reducer;

export const { logout } = userSlice.actions;
