import {
  RECOMMENDATIONS_REQUEST,
  RECOMMENDATIONS_SUCCESS,
  RECOMMENDATIONS_FAILURE,
} from "../constants";

import axios from "axios";

export const getRecommendations = (id) => async (dispatch) => {
  try {
    dispatch({ type: RECOMMENDATIONS_REQUEST });
    const { data } = await axios.get(
      `https://www.song-sift.com/api/recommendations/?q=${id}`
    );
    dispatch({ type: RECOMMENDATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RECOMMENDATIONS_FAILURE,
      payload: error.message,
    });
  }
};
