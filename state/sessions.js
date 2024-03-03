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

export const createSession = createAsyncThunk("createSession", async (payload) => {
  try {
    //console.log("Payload: ", payload)
    const response = await fetch(`http://172.28.192.1:3000/sessions/newSession`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(payload)
    })
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
})

export const deleteSession = createAsyncThunk('deleteSession', async (payload) => {
  const {sessionId} = payload;
  const response = await fetch(`http://172.28.192.1:3000/sessions/${sessionId}/delete`, {
    method:'DELETE'
  });
  const data = await response.text()
  return sessionId
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
    }),
    builder.addCase(createSession.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(createSession.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = [...state.data, action.payload];
    }),
    builder.addCase(createSession.rejected, (state, action) => {
      state.isLoading = false
    }),
    builder.addCase(deleteSession.pending, (state, action) => {
      state.isLoading = true;
    }),
    builder.addCase(deleteSession.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(session => session.id != action.payload)
    }),
    builder.addCase(deleteSession.rejected, (state, action) => {
      state.isLoading = false
    })
  }
})

export default sessionsSlice.reducer
