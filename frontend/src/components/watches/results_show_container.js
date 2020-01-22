import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import ResultsShow from './results_show';

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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsShow);