import { connect } from 'react-redux';
import App from './App';
import { getUser } from '../redux-modules/user/selectors';
import { getDepartment } from '../redux-modules/department/actions';

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getDepartment: () => dispatch(getDepartment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
