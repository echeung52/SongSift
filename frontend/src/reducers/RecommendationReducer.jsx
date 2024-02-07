import {
  RECOMMENDATIONS_REQUEST,
  RECOMMENDATIONS_SUCCESS,
  RECOMMENDATIONS_FAILURE,
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
