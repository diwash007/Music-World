import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { trending: any[]; all: any[] } = {
  trending: [],
  all: [],
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addTrendingAlbums: (state, action: PayloadAction<any[]>) => {
      state.trending = action.payload;
      state.all = state.all.concat(action.payload);
    },
    addAlbums: (state, action: PayloadAction<any[]>) => {
      state.all = state.all.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAlbums, addTrendingAlbums } = albumsSlice.actions;

export const addTrendingAsync = (albums: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(addTrendingAlbums(albums));
  }, 1000);
};

export const addAsync = (albums: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(addAlbums(albums));
  }, 1000);
};

export default albumsSlice.reducer;
