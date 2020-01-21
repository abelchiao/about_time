import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import Index from './index';

const mapStateToProps = (state) => {
    return {
        watches: Object.values(state.watches.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearch: () => dispatch(fetchSearch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);