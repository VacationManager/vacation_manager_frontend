import { connect } from 'react-redux';
import UserView from './UserView';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(mapStateToProps, null)(UserView);
