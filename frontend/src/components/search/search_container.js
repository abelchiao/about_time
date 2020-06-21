import { connect } from 'react-redux';
import { fetchWatches } from '../../actions/watch_actions';
import { confirmDataLoad, resetDataLoad } from '../../actions/data_load_actions'
import SearchForm from './search_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWatches: search => dispatch(fetchWatches(search)),
        confirmDataLoad: () => dispatch(confirmDataLoad()),
        resetDataLoad: () => dispatch(resetDataLoad())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
