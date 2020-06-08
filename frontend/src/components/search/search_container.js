import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import { fetchWatches } from '../../actions/watch_actions';
import SearchForm from './search_form';
import { confirmDataLoad, resetDataLoad } from '../../actions/data_load_actions'


const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // TODO UNUSED
        // fetchSearch: data => dispatch(fetchSearch(data)),
        fetchWatches: search => dispatch(fetchWatches(search)),
        confirmDataLoad: () => dispatch(confirmDataLoad()),
        resetDataLoad: () => dispatch(resetDataLoad())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);