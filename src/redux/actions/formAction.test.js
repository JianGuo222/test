import { clearForm, submit } from './formActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as ActionTypes from '../constants/ActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_SERVER } from '../constants/ApiServer';

const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should have action to clear form state', () => {
  const clearAction = {
    type: ActionTypes.CLEAR_FORM,
  };
  expect(clearForm({})).toEqual(clearAction);
});

it('should have action to submit', async () => {
  const name = 'test';
  const email = 'test@test.com';
  mock.onPost(API_SERVER).reply(200, 'Registered');
  const submitAction = {
    type: ActionTypes.FORM_SUBMIT,
    res: 'Registered',
  };
  const store = mockStore();
  await store.dispatch(submit(name, email));
  expect(store.getActions()).toContainEqual(submitAction);
});

it('should dispatch error action type on ajax failure', async () => {
  const name = 'test';
  const email = 'usedemail@airwallex.com';
  mock.onPost(API_SERVER).reply(400);
  const errorAction = {
    type: ActionTypes.ERROR,
    error: 'Request failed with status code 400',
  };
  const store = mockStore();
  await store.dispatch(submit(name, email));
  expect(store.getActions()).toContainEqual(errorAction);
});
