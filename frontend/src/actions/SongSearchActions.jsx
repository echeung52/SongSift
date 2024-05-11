import {
  SONG_SEARCH_REQUEST,
  SONG_SEARCH_SUCCESS,
  SONG_SEARCH_FAIL,
  SONG_SELECT_REQUEST,
  SONG_SELECT_SUCCESS,
  SONG_SELECT_FAIL,
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

export const getSelectedSong = (id) => async (dispatch) => {
  try {
    dispatch({ type: SONG_SELECT_REQUEST });
    const { data: trackData } = await axios.get(
      `https://www.song-sift.com/api/track/?q=${id}`
    );
    const { data: token } = await axios.get(
      "https://www.song-sift.com/api/token/"
    );

    dispatch({ type: SONG_SELECT_SUCCESS, payload: { trackData, token } });
  } catch (error) {
    dispatch({
      type: SONG_SELECT_FAIL,
      payload: error.message,
    });
  }
};
