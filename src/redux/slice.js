import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "main",
  initialState: {
    isAssistantVisible: true,
    scrollToSection: "",
  },
  reducers: {
    toggleAssistantVisible(state, action) {
      state.isAssistantVisible = !state.isAssistantVisible;
    },
    scrollToSection(state, action) {
      state.scrollToSection = action.payload;
    },
  },
});

export const { toggleAssistantVisible, scrollToSection } = slice.actions;
export const reducer = slice.reducer;
