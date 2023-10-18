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
    scrollToSection(state, action) {
      window.scrollTo({
        top: action.payload.current.clientTop,
        behavior: "smooth",
      });
    },
  },
});

export const { toggleAssistantVisible, scrollToSection } = slice.actions;
export const reducer = slice.reducer;
