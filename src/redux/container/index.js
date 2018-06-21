import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as formActions from '../actions/formActions';
import App from '../../App';

const mapStateToProps = state => ({
  ...state.formReducer,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...formActions }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
