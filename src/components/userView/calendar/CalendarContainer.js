import { connect } from 'react-redux';
import Calendar from './Calendar';

// const mapStateToProps = (state) => {
//     return {
//         userToken: getUserToken(state),
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(null, null)(Calendar);
