import formReducer from './formReducer';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  pending: false,
  submitSuccessful: false,
  error: null,
};

it('should return the initial state', () => {
  expect(formReducer(undefined, {})).toEqual(initialState);
});

it('should have default return', () => {
  const testAction = {
    type: 'TestAction',
  };
  expect(formReducer({}, testAction)).toEqual({});
});

it('should handle submit action', () => {
  const action = {
    type: ActionTypes.FORM_SUBMIT,
    res: 'Registered',
  };
  expect(formReducer(initialState, action).submitSuccessful).toEqual(true);
});

it('should handle pending action', () => {
  const action = {
    type: ActionTypes.PENDING,
    res: 'Registered',
  };
  expect(formReducer(initialState, action).pending).toEqual(true);
});

it('should handle error action', () => {
  const action = {
    type: ActionTypes.ERROR,
    error: 'test',
  };
  expect(formReducer(initialState, action).error).toEqual('test');
});

it('should handle clear form action', () => {
  const action = {
    type: ActionTypes.CLEAR_FORM,
    error: 'test',
  };
  expect(formReducer(initialState, action)).toEqual(initialState);
});
