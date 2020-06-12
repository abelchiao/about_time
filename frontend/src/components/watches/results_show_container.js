import { connect } from 'react-redux';
import { fetchWatches } from '../../actions/watch_actions';
import { newSearch } from '../../actions/search_actions';
import { openModal } from '../../actions/modal_actions';
import { resetDataLoad } from '../../actions/data_load_actions'
import ResultsShow from './results_show';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        watches: state.watches,
        searches: state.searches,
        errors: state.errors.search,
        dataLoad: state.ui.dataLoad
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWatches: search => dispatch(fetchWatches(search)),
        newSearch: data => dispatch(newSearch(data)),
        openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
        resetDataLoad: () => dispatch(resetDataLoad())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsShow);
