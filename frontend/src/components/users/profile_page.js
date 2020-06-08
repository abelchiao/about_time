import React from "react";
import Navbar from '../navbar/navbar';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleLabelClick = this.handleLabelClick.bind(this);
    };

    async componentDidMount() {
        this.props.resetDataLoad();
        if (this.props.currentUser.handle) {
            await this.props.fetchUserSearches();
            this.setState({loaded: true});
        }
    };

    handleLabelClick(e, query) {
        e.preventDefault();
        this.props.fetchWatches(query)
        // .then( () => this.props.confirmDataLoad() );
        this.props.history.push(`/watches/search`);
    };

    handleDeleteClick(e, searchId) {
        e.preventDefault();
        e.stopPropagation();
        this.props.deleteSearch(searchId)
            .then(() => alert("Search deleted!"));
    };

    render() {

        if (this.state.loaded === false) {
            return null;
        } else {
            let searches =
                ((this.props.searches.all.length === undefined) || (this.props.searches.all.length === 0))
                    ?
                        <div className="search-item-parent">
                            <div className="search-item-header">
                                No saved searches
                            </div>
                        </div>
                    :
                        this.props.searches.all.map( (search, idx) => (
                                <div className="search-item-parent" key={ idx } onClick={ e => this.handleLabelClick(e, search.query) }>
                                    <div className="search-item-header">
                                        <div className="profile-search-label">
                                            { search.label }
                                        </div>
                                        <div className="profile-search-delete">
                                            <svg className="profile-search-delete-icon" onClick={ e => this.handleDeleteClick(e, search._id) } aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="search-item-details">
                                        <ul className="search-item-details-list">
                                            { Object.keys(search.query)
                                                    .map( search_prop => (
                                                        (search.query[search_prop] !== "")
                                                            ? <li className="search-item-details-list-item" key={ search_prop }> { (search_prop.toUpperCase() + ": " + search.query[search_prop] + " ") } </li>
                                                            : null
                                                        )
                                                    )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        );

            return (
                (!this.props.currentUser.handle)
                    ?
                        <div className="profile-page-container">
                            <Navbar />
                            <div className="profile-page-intro-text">
                                Please log in to see your profile page.
                            </div>
                        </div>
                    :
                        <div className="profile-page-container">
                            <Navbar />
                            <div className="profile-page-intro-text">
                                Welcome, { this.props.currentUser.handle }!
                            </div>
                            <div className="search-items-container">
                                <div className="search-items-header">Saved searches</div>
                                <div className="search-items-index">{ searches }</div>
                            </div>
                        </div>
            );
        }
    }
}

export default ProfilePage;



// DONE TODO add saved searches to global state OR pull searches from DB on open of profile page
// TODO iterate across reviews for all watches to show any from the user
// DONE TODO profile page should reflect only logged in OR any user
// DONE TODO add check for data loaded before render
// DONE TODO initial styling for profile page/test
// DONE TODO add link from search label to hit search api
// DONE TODO delete button for label
// TODO component for search item
// DONE TODO add navbar to profile page
// DONE TODO return link to main search page

// DONE TODO reorg search item panel to combined layout
// DONE TODO add query parameters to search label
// TODO loading icon