// authSlice: It manages the authentication state, such as whether the user is logged in or not
// It passes data (authentication status, user info, token) to the store
// It includes functions to log in and log out the user

import { createSlice } from '@reduxjs/toolkit';

// Initial state that defines the default values before any user input or authentication actions
const initialState = {
  isAuthenticated: false,  // User is not authenticated initially
  user: null,  // User information is null initially
  token: null,  // No authentication token initially
};

// Creating the 'auth' slice that contains the state and reducers for authentication actions
const authSlice = createSlice({
  name: 'auth',  // Name of the slice for identification
  initialState,  // The initial state defined above
  reducers: {
    // login reducer: called when the user successfully logs in
    login(state, action) {
      const { user, token } = action.payload;  // Destructuring user and token from action payload
      state.isAuthenticated = true;  // Set isAuthenticated to true after login
      state.user = user;  // Store the user data in state
      state.token = token;  // Store the authentication token in state
    },

    // logout reducer: called when the user logs out
    logout(state) {
      state.isAuthenticated = false;  // Set isAuthenticated to false after logout
      state.user = null;  // Clear user data
      state.token = null;  // Clear authentication token
    },
  },
});

// Exporting the individual reducers as actions to be used by the components
export const { login, logout } = authSlice.actions;

// Exporting the reducer to be included in the store
export default authSlice.reducer;
