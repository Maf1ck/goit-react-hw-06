import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        filterChange: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { filterChange } = filtersSlice.actions;
export default filtersSlice.reducer;
  