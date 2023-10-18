import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
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

export const { toggleAssistantVisible } = slice.actions;
export const reducer = slice.reducer;
