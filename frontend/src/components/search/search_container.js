import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import { fetchWatches } from '../../actions/watch_actions';
import SearchForm from './search_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // TODO UNUSED
        // fetchSearch: data => dispatch(fetchSearch(data)),
        fetchWatches: search => dispatch(fetchWatches(search))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);