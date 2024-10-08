// src/features/customer/customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Old API URL
// const API_URL = 'http://justhitclick.somee.com/api/Contact';

// New API URL
const API_URL = '/api/contact'; // This now points to your Vercel function

// Async thunk for creating a contact
export const createContact = createAsyncThunk(
  'customer/createContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, contactData);
      return response.data;
    } catch (error) {
      // Handle network errors or cases where there's no response
      const message = error.response?.data || 'Network Error';
      return rejectWithValue(message);
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    contact: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contact = action.payload;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
