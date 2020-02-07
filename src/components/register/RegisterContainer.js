import { connect } from 'react-redux';
import { register } from '../../redux-modules/config/actions';
import Register from './Register';

const mapStateToProps = (state) => ({
    config: state.config,
});

const mapDispatchToProps = (dispatch) => ({
    setConfig: (data) => dispatch(register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
