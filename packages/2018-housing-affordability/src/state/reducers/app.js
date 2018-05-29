import { getOregonMedianPrices } from '../../api';

export const INITIAL_STATE = {
  isFetching: false,
};

export const GET_MEDIAN_PRICES = 'GET_MEDIAN_PRICES';
export const GET_MEDIAN_PRICES_SUCCESS = 'GET_MEDIAN_PRICES_SUCCESS';
export const GET_MEDIAN_PRICES_FAILURE = 'GET_MEDIAN_PRICES_FAILURE';

export const getMedianPrices = payload => ({ type: GET_MEDIAN_PRICES, payload });
export const getMedianPricesSuccess = payload => ({ type: GET_MEDIAN_PRICES_SUCCESS, payload });
export const getMedianPricesFailure = error => ({ type: GET_MEDIAN_PRICES_FAILURE, error });

// *** THUNKS: THE THUNK CAN BE USED TO DELAY THE DISPATCH OF AN ACTION, OR TO DISPATCH
// ONLY IF A CERTAIN CONDITION IS MET. *** //
export const getMedianPricesThunk = () => dispatch => {
  dispatch(getMedianPrices([]));
  return getOregonMedianPrices().then(
    data => dispatch(getMedianPricesSuccess(data)),
    err => dispatch(getMedianPricesFailure(err)),
  );
};

// *** REDUCER: TAKES THE PREVIOUS STATE AND AN ACTION, AND RETURNS THE NEXT STATE. *** //
// APP REDUCER //
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEDIAN_PRICES:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MEDIAN_PRICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        medianPriceData: action.payload,
      };
    case GET_MEDIAN_PRICES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;