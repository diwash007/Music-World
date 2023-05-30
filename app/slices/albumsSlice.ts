import { createSlice } from "@reduxjs/toolkit";

const initialState: { trending; all } = {
  trending: [],
  all: [],
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addTrendingAlbums: (state, action) => {
      state.trending = action.payload;
      state.all = state.all.concat(action.payload);
    },
    addAlbums: (state, action) => {
      state.all = state.all.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAlbums, addTrendingAlbums } = albumsSlice.actions;

export const addTrendingAsync = (albums) => (dispatch) => {
  setTimeout(() => {
    dispatch(addTrendingAlbums(albums));
  }, 1000);
};

export const addAsync = (albums) => (dispatch) => {
  setTimeout(() => {
    dispatch(addAlbums(albums));
  }, 1000);
};

export default albumsSlice.reducer;
