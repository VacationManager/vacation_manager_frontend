import { connect } from 'react-redux';
import App from './App';
import { getUser } from '../redux-modules/user/selectors';
import { getDepartment } from '../redux-modules/department/actions';
import { logout } from '../redux-modules/user/actions';
import { getPendingVacations, handleVacationRequest } from '../redux-modules/departmentManager/actions';

const mapStateToProps = (state) => ({
    user: getUser(state),
    departments: state.department.departments,
    pendingVacations: state.departmentManager.departmentManager,
});

const mapDispatchToProps = (dispatch) => ({
    getDepartment: () => dispatch(getDepartment()),
    logout: () => dispatch(logout()),
    getPendingVacations: () => dispatch(getPendingVacations()),
    handleVacationRequestState: (value) => dispatch(handleVacationRequest(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
