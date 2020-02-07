import { connect } from 'react-redux';
import User from './User';
import { deleteUser, updateUser } from '../../../../../redux-modules/department/actions';


const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(deleteUser(id)),
    updateUser: (value) => dispatch(updateUser(value)),
});

export default connect(null, mapDispatchToProps)(User);
