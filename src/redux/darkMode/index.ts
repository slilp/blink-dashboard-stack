import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IThemeState {
  theme: "light" | "dark";
}

const initialState: IThemeState = {
  theme: "light",
};

export const darkModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? "dark" : "light";
    },
  },
});

export const { changeTheme } = darkModeSlice.actions;

export const themeModeSelector = (state: RootState) => state.darkMode;

export default darkModeSlice.reducer;
