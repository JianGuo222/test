import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Layout from './components/shared/layout';
import { CenterWrapper, WelcomeWrapper, Button } from './App.style';
import RequestForm from './components/requestForm';

class App extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.actions.clearForm();
  };

  render() {
    const customContentStyle = {
      width: '100%',
      maxWidth: '400px',
    };
    return (
      <Layout>
        <CenterWrapper>
          <WelcomeWrapper>
            <h1>
              A better way <br /> to enjoy every day.
              <small>Be the first one to know when we launch!</small>
            </h1>
            <Button id="request-button" onClick={this.handleOpen}>
              Request an invite
            </Button>
          </WelcomeWrapper>
        </CenterWrapper>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          autoScrollBodyContent
          muiTheme={null}
        >
          <RequestForm closeModal={this.handleClose} {...this.props} />
        </Dialog>
      </Layout>
    );
  }
}

export default App;
