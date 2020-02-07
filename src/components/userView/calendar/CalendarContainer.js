import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = (state) => ({
    departments: state.department && state.department.departments,
});

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(mapStateToProps, null)(Calendar);
