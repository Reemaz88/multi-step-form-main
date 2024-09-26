import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  plan: {
    type: '',
    duration: '',
  },
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePersonalInfo(state, action) {
      state.personalInfo = action.payload;
    },
    updatePlan(state, action) {
      state.plan = action.payload;
    },
    updateAddOns(state, action) {
      state.addons = action.payload; // Update the addons state
    },
  },
});

export const { updatePersonalInfo, updatePlan, updateAddOns } = formSlice.actions;

export default formSlice.reducer;
