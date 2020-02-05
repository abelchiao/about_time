import { connect } from 'react-redux';
import { fetchSearch, newSearch } from '../../actions/search_actions';
import { openModal } from '../../actions/modal_actions';
import ResultsShow from './results_show';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        topThree: state.watches.slice(0, 3),
        otherResults: state.watches.slice(3, ),
        watches: state.watches,
        errors: state.errors.search,
        searches: state.searches
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearch: (data) => dispatch(fetchSearch(data)),
        newSearch: (data) => dispatch(newSearch(data)),
        openModal: (modal, watchId) => dispatch(openModal(modal, watchId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsShow);