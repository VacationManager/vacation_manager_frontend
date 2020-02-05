import { connect } from 'react-redux';
import App from './App';
import { getUser } from '../redux-modules/user/selectors';

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(mapStateToProps, null)(App);
