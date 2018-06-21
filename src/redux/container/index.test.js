import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { default as Container } from './';
import * as formActions from '../actions/formActions';

const mockStore = configureStore();
const store = mockStore({
  formActions,
});

it('should map actions to props', () => {
  const wrapper = shallow(<Container store={store} />);
  expect(JSON.stringify(wrapper.prop('actions'))).toEqual(
    JSON.stringify(formActions),
  );
});
