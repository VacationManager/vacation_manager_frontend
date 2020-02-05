import { connect } from 'react-redux';
import AdminView from './AdminView';

// const mapStateToProps = (state) => {
//     return {
//         user: getUser(state),
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(null, null)(AdminView);
