import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import Index from './index';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearch: (data) => dispatch(fetchSearch(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);