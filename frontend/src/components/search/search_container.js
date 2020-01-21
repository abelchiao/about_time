import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: search => dispatch(fetchSearch(search))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);