import {
  SONG_SEARCH_REQUEST,
  SONG_SEARCH_SUCCESS,
  SONG_SEARCH_FAIL,
 
} from "../constants";

export const songSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case SONG_SEARCH_REQUEST:
      return { loading: true };

    case SONG_SEARCH_SUCCESS:
      return {
        loading: false,
        searchedSongs: action.payload,
      };

    case SONG_SEARCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


