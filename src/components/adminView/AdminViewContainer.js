import { connect } from 'react-redux';
import AdminView from './AdminView';
import { createDepartment } from '../../redux-modules/department/actions';

const mapStateToProps = (state) => {
    return {
        departments: state.department && state.department.departments,
    };
};

const mapDispatchToProps = (dispatch) => ({
    createDepartment: (name) => dispatch(createDepartment(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
