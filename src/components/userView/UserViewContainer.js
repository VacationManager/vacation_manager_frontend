import { connect } from 'react-redux';
import UserView from './UserView';

// const mapStateToProps = (state) => {
//     return {
//         userToken: getUserToken(state),
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(null, null)(UserView);
