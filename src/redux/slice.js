import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "main",
  initialState: {
    isAssistantVisible: true,
    isNavigationVisible: false,
    scrollToSection: "",
  },
  reducers: {
    toggleAssistantVisible(state, action) {
      state.isAssistantVisible = !state.isAssistantVisible;
    },
    toggleNavigationVisible(state, action) {
      state.isNavigationVisible = !state.isNavigationVisible;
    },
    scrollToSection(state, action) {
      state.scrollToSection = action.payload;
    },
  },
});

export const {
  toggleAssistantVisible,
  toggleNavigationVisible,
  scrollToSection,
} = slice.actions;

export const reducer = slice.reducer;
