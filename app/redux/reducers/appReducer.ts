import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../data';

type AppState = {
  employees: Employee[];
};

const initialState: AppState = {
  employees: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(i => i.id !== action.payload);
    },
  },
});

export const { removeEmployee } = appSlice.actions;

export const appReducer = appSlice.reducer;
