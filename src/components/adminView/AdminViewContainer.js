import { connect } from 'react-redux';
import AdminView from './AdminView';
import { createDepartment } from '../../redux-modules/department/actions';
import { fetchCreateUser } from '../../redux-modules/user/actions';

const mapStateToProps = (state) => {
    return {
        departments: state.department && state.department.departments,
    };
};

const mapDispatchToProps = (dispatch) => ({
    createDepartment: (name) => dispatch(createDepartment(name)),
    fetchCreateUser: (value) => dispatch(fetchCreateUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
