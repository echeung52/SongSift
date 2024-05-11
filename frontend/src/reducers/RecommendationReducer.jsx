import {
  RECOMMENDATIONS_REQUEST,
  RECOMMENDATIONS_SUCCESS,
  RECOMMENDATIONS_FAILURE,
  SONG_SELECT_SUCCESS,
  SONG_SELECT_REQUEST,
  SONG_SELECT_FAIL,
} from "../constants";

export const recommendationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECOMMENDATIONS_REQUEST:
      return {
        loading: true,
      };

    case RECOMMENDATIONS_SUCCESS:
      return {
        loading: false,
        songRecommendations: action.payload,
      };
    case RECOMMENDATIONS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const selectedSongReducer = (state = {}, action) => {
  switch (action.type) {
    case SONG_SELECT_REQUEST:
      return { loading: true };

    case SONG_SELECT_SUCCESS:
      return {
        loading: false,
        song: action.payload,
      };

    case SONG_SELECT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
