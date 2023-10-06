import { createSlice } from '@reduxjs/toolkit';

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
        setCredentialsSlice:(state, action) => action.payload 
    }
})

export const { setCredentialsSlice } = credentialSlice.actions;

export default credentialSlice.reducer;
