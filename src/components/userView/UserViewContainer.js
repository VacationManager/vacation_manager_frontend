import { connect } from 'react-redux';
import UserView from './UserView';

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(UserView);
