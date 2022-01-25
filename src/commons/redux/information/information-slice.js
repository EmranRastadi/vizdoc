import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

const informationSlice = createSlice({
  name: 'visitInformation',
  initialState,
  reducers: {
    setVisitInformation(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setVisitInformation } = informationSlice.actions;
export default informationSlice.reducer;
