import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {
  FormWrapper,
  FormHeader,
  FormBody,
  Fieldset,
  PendingContainer,
  CenterBlock,
  ErrorBlock,
} from './RequestForm.style';

class RequestForm extends React.PureComponent {
  state = {
    fullname: {
      value: '',
      error: null,
    },
    email: {
      value: '',
      error: null,
    },
    confirmEmail: {
      value: '',
      error: null,
    },
    valid: true,
  };

  handleChange = name => event => {
    this.setState({
      [name]: { value: event.target.value, error: '' },
    });
  };

  validateEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email);
  };

  sendHandler = () => {
    const newState = { ...this.state };
    // validation
    newState.fullname.error =
      newState.fullname.value.trim().length < 3
        ? 'Full name must be at least 3 letters.'
        : null;
    newState.email.error = !this.validateEmail(newState.email.value.trim())
      ? 'Please enter a valid email.'
      : null;

    newState.confirmEmail.error =
      newState.email.value.trim() === newState.confirmEmail.value.trim()
        ? null
        : 'This email does not match.';

    if (
      newState.fullname.error ||
      newState.email.error ||
      newState.confirmEmail.error
    ) {
      this.setState({ newState, valid: false });
    } else {
      this.props.actions.submit(newState.fullname.value, newState.email.value);
    }
  };

  render() {
    const { pending, submitSuccessful, closeModal, error } = this.props;
    return submitSuccessful ? (
      <FormWrapper>
        <FormHeader>
          All done!<hr />
        </FormHeader>
        <FormBody>
          <p>
            There will be an email sent to you. Please click on the activation
            link to activate the invite.
          </p>
          <Fieldset center>
            <RaisedButton
              label="OK"
              primary
              disabled={pending}
              onClick={closeModal}
            />
          </Fieldset>
        </FormBody>
      </FormWrapper>
    ) : (
      <FormWrapper>
        <FormHeader>Request an invite</FormHeader>
        <FormBody>
          <Fieldset>
            <TextField
              id="fullname"
              fullWidth
              hintText="Enter your full name"
              floatingLabelText="Full Name"
              value={this.state.fullname.value}
              onChange={this.handleChange('fullname')}
              errorText={this.state.fullname.error}
            />
          </Fieldset>
          <Fieldset>
            <TextField
              id="email"
              fullWidth
              hintText="Enter your email address"
              floatingLabelText="Email"
              value={this.state.email.value}
              onChange={this.handleChange('email')}
              errorText={this.state.email.error}
            />
          </Fieldset>
          <Fieldset>
            <TextField
              id="confirm-email"
              fullWidth
              hintText="Confirm your email address"
              floatingLabelText="Confirm Email"
              errorText={this.state.confirmEmail.error}
              value={this.state.confirmEmail.value}
              onChange={this.handleChange('confirmEmail')}
            />
          </Fieldset>
          <Fieldset center>
            {pending ? (
              <PendingContainer>
                <CenterBlock>
                  <RefreshIndicator
                    size={30}
                    left={0}
                    top={-10}
                    status="loading"
                  />
                </CenterBlock>
              </PendingContainer>
            ) : null}
            <RaisedButton
              id="send-button"
              label="Send"
              primary
              disabled={pending}
              onClick={this.sendHandler}
            />
          </Fieldset>
          <ErrorBlock>{error}</ErrorBlock>
        </FormBody>
      </FormWrapper>
    );
  }
}

export default RequestForm;
