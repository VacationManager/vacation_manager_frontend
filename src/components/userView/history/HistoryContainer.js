import { connect } from 'react-redux';
import History from './History';

const mapStateToProps = (state) => {
    return {
        vacations: state.user && state.user.vacations,
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     getComment: (id, folderId) => dispatch(getComment(id, folderId)),
// });

export default connect(mapStateToProps, null)(History);
