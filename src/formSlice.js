import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepOneData: { name: '', email: '', phone: '' },
  stepTwoData: { plan: '', billing: 'monthly' },
  stepThreeData: { onlineService: false, largerStorage: false, customizableProfile: false },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStepOneData: (state, action) => {
      state.stepOneData = action.payload;
    },
    setStepTwoData: (state, action) => {
      state.stepTwoData = action.payload;
    },
    setStepThreeData: (state, action) => {
      state.stepThreeData = action.payload;
    },
  },
});

export const { setStepOneData, setStepTwoData, setStepThreeData } = formSlice.actions;
export default formSlice.reducer;
