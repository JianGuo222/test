import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  pending: false,
  submitSuccessful: false,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FORM_SUBMIT:
      return {
        ...state,
        pending: false,
        error: null,
        submitSuccessful: action.res === 'Registered',
      };
    case ActionTypes.PENDING:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.CLEAR_FORM:
      return {
        ...initialState,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default formReducer;
