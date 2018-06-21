import * as ActionTypes from '../constants/ActionTypes';
import { formAsync } from './utils/formActionUtils';

export const submit = (name, email) => async dispatch => {
  dispatch({
    type: ActionTypes.PENDING,
  });
  try {
    const res = await formAsync(name, email);
    dispatch({
      type: ActionTypes.FORM_SUBMIT,
      res,
    });
  } catch (e) {
    dispatch({
      type: ActionTypes.ERROR,
      error: e.message,
    });
  }
};
export const clearForm = () => ({
  type: ActionTypes.CLEAR_FORM,
});
