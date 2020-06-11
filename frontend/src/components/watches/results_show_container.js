import { connect } from 'react-redux';
import { fetchSearch, newSearch } from '../../actions/search_actions';
import { fetchWatches } from '../../actions/watch_actions';
import { openModal } from '../../actions/modal_actions';
import ResultsShow from './results_show';
import { resetDataLoad } from '../../actions/data_load_actions'

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        topThree: state.watches.slice(0, 3),
        otherResults: state.watches.slice(3, ),
        watches: state.watches,
        errors: state.errors.search,
        searches: state.searches,
        currentUser: state.session.user,
        dataLoad: state.ui.dataLoad
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // TODO UNUSED
        // fetchSearch: (data) => dispatch(fetchSearch(data)),
        fetchWatches: search => dispatch(fetchWatches(search)),
        newSearch: (data) => dispatch(newSearch(data)),
        openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
        resetDataLoad: () => dispatch(resetDataLoad())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsShow);