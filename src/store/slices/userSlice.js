import { createSlice } from '@reduxjs/toolkit';
import { fetchAddress } from './thunks';

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      }),
});

export const { updateName } = userSlice.actions;
