import {
  SONG_SEARCH_REQUEST,
  SONG_SEARCH_SUCCESS,
  SONG_SEARCH_FAIL,
} from "../constants";

import axios from "axios";

export const getSongs = (input) => async (dispatch) => {
  try {
    dispatch({ type: SONG_SEARCH_REQUEST });
    if (input) {
      const { data } = await axios.get(
        `https://www.song-sift.com/api/search/${input}`
      );
      dispatch({ type: SONG_SEARCH_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: SONG_SEARCH_FAIL,
      payload: error.message,
    });
  }
};
