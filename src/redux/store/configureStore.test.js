import configureStore from './configureStore';
import * as ActionTypes from '../constants/ActionTypes';

it('should set the supplied initial state', () => {
  const store = configureStore();
  expect(store.getState().formReducer.pending).toEqual(false);
});

it('should update store state on relevant action', () => {
  const store = configureStore();
  store.dispatch({
    type: ActionTypes.PENDING,
  });
  expect(store.getState().formReducer.pending).toEqual(true);
});
