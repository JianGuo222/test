import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should update state when clicking Request button', () => {
  const appWrapper = shallow(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
  )
    .find(App)
    .dive();
  appWrapper.find('#request-button').simulate('click');
  expect(appWrapper.state().open).toEqual(true);
});

it('should update state and trigger clearForm action when handleClose called', () => {
  const mockClearForm = jest.fn();
  const mockProps = {
    actions: {
      clearForm: mockClearForm,
    },
  };
  const appWrapper = shallow(
    <MuiThemeProvider>
      <App {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(App)
    .dive();
  appWrapper.instance().handleClose();
  expect(appWrapper.state().open).toEqual(false);
  expect(mockClearForm).toHaveBeenCalled();
});
