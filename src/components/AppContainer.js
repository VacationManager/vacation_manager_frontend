import { connect } from 'react-redux';
import App from './App';
import { getUserToken } from '../redux-modules/user/selectors';

const mapStateToProps = (state) => {
    return {
        userToken: getUserToken(state),
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(mapStateToProps, null)(App);
