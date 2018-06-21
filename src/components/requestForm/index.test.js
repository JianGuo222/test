import React from 'react';
import { shallow, mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RequestForm from './';

const mockProps = {
  pending: false,
  submitSuccessful: false,
  closeModal: jest.fn(),
  error: null,
  actions: {
    submit: jest.fn(),
  },
};

it('should show successful screen upon submitted successfully', () => {
  mockProps.submitSuccessful = true;
  const wrapper = mount(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  );
  expect(wrapper.html()).toContain('All done!');
  mockProps.submitSuccessful = false;
  const wrapperForm = mount(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  );
  expect(wrapperForm.html()).not.toContain('All done!');
});

it('should show loading when submitting', () => {
  mockProps.pending = true;
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  ).dive();
  expect(wrapper.find('RefreshIndicator').length).toEqual(1);
  mockProps.pending = false;
});

it('should update state on text field change', () => {
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(RequestForm)
    .dive();
  expect(wrapper.state().fullname.value).toEqual('');
  wrapper.find('#fullname').simulate('change', { target: { value: 'test' } });
  expect(wrapper.state().fullname.value).toEqual('test');
});

it('should validate username on submit', () => {
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(RequestForm)
    .dive();
  expect(wrapper.state().fullname.error).toEqual(null);
  wrapper.find('#fullname').simulate('change', { target: { value: '12' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().fullname.error).toEqual(
    'Full name must be at least 3 letters.',
  );
  wrapper.find('#fullname').simulate('change', { target: { value: '123' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().fullname.error).toEqual(null);
});

it('should validate email on submit', () => {
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(RequestForm)
    .dive();
  expect(wrapper.state().email.error).toEqual(null);
  wrapper.find('#email').simulate('change', { target: { value: 'test' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().email.error).toEqual('Please enter a valid email.');
  wrapper
    .find('#email')
    .simulate('change', { target: { value: 'test@test.com' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().email.error).toEqual(null);
});

it('should validate confirm email on submit', () => {
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(RequestForm)
    .dive();
  expect(wrapper.state().confirmEmail.error).toEqual(null);
  wrapper
    .find('#email')
    .simulate('change', { target: { value: 'test@test.com' } });
  wrapper
    .find('#confirm-email')
    .simulate('change', { target: { value: 'test2@test.com' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().confirmEmail.error).toEqual(
    'This email does not match.',
  );
  wrapper
    .find('#confirm-email')
    .simulate('change', { target: { value: 'test@test.com' } });
  wrapper.find('#send-button').simulate('click');
  expect(wrapper.state().confirmEmail.error).toEqual(null);
});

it('should call submit action once all valid', () => {
  const customSubmit = jest.fn();
  mockProps.actions.submit = customSubmit;
  const wrapper = shallow(
    <MuiThemeProvider>
      <RequestForm {...mockProps} />
    </MuiThemeProvider>,
  )
    .find(RequestForm)
    .dive();
  wrapper.find('#fullname').simulate('change', { target: { value: '123' } });

  wrapper
    .find('#email')
    .simulate('change', { target: { value: 'test@test.com' } });

  wrapper
    .find('#confirm-email')
    .simulate('change', { target: { value: 'test@test.com' } });
  wrapper.find('#send-button').simulate('click');
  expect(customSubmit).toHaveBeenCalled();
});
