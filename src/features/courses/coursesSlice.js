import { createSlice } from '@reduxjs/toolkit'

export const  coursesSlice = createSlice({
    name: 'courses',
    initialState:[],
    reducers:{
        fetch: (state,action) => {
            return Object.assign([], state, action.payload);
        }
    }
})

export const { fetch } = coursesSlice.actions;
export default coursesSlice.reducer;