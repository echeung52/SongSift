import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { songSearchReducer } from "./reducers/SongSearchReducer";
import { recommendationReducer } from "./reducers/RecommendationReducer";
import { selectedSongReducer } from "./reducers/RecommendationReducer";

const reducer = combineReducers({
  searchedSongs: songSearchReducer,
  recommendations: recommendationReducer,
  selectedSong: selectedSongReducer,
});

export const initialState = {};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

export default store;
