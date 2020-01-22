import { connect } from 'react-redux';
import { fetchSearch, newSearch } from '../../actions/search_actions';
import ResultsShow from './results_show';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.search
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newSearch: (data) => dispatch(newSearch(data)),
        fetchSearch: (data) => dispatch(fetchSearch(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsShow);