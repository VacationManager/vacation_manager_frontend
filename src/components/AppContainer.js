import { connect } from 'react-redux';
import App from './App';
import { getUser } from '../redux-modules/user/selectors';
import { getDepartment } from '../redux-modules/department/actions';
import { logout } from '../redux-modules/user/actions';

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getDepartment: () => dispatch(getDepartment()),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
