import { connect } from 'react-redux';
import Login from './Login';
import { sendLogin } from '../../redux-modules/user/actions';

const mapDispatchToProps = (dispatch) => ({
    sendLogin: (email, password) => dispatch(sendLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
