import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isAssistantVisible: true,
  },
  reducers: {
    toggleAssistantVisible(state, action) {
      state.isAssistantVisible = !state.isAssistantVisible;
    },
  },
});

export const { toggleAssistantVisible } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
