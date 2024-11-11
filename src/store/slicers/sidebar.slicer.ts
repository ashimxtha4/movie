import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  on: boolean;
}

const initialState: SidebarState = {
  on: true,
};

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.on = !state.on;
    },
    hideSidebar: (state) => {
      state.on = false;
    },
  },
});

export const { toggleSidebar, hideSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
