import React from "react";
import { Redirect } from 'react-router-dom';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        loaded: false,
        redirectToResults: false
    };

      this.handleLabelClick = this.handleLabelClick.bind(this);
  }

  async componentDidMount() {
    if (this.props.currentUser.handle) {
        await this.props.fetchUserSearches()
        this.setState({loaded: true});
    }
  }

    handleLabelClick(e, query) {
        e.preventDefault();
        this.props.fetchWatches(query)
            .then(this.setState({ redirectToResults: true }));
    }

    handleDeleteClick(e, searchId) {
        e.preventDefault();

        // if (this.state.searchLabel === "") {
        //     alert("Add label to save search")
        // } else {
        //     let data = {
        //         label: this.state.searchLabel,
        //         query: this.props.searches.new
        //     };
        //     // TODO duplicate clicks will fail unless search state is persisted to local storage
        // console.log(searchId)
            this.props.deleteSearch(searchId)
                .then(() => alert("Search deleted!"))
        // }
    }

  render() {
    console.log("STATE: ", this.state);
    // console.log("PROPS: ", this.props);

    const redirectToResults = this.state.redirectToResults;
    if (redirectToResults === true) {
        return <Redirect to="/watches/search" />;
    }

    if (this.state.loaded === false) {
        // console.log("FALSE STATE TRIGGER")
        return null
    } else {

        let searches;
        if ((this.props.searches.all.length === undefined) || (this.props.searches.all.length === 0)) {
            searches =
                <div className="search-item-parent">
                    <div className="search-item-header">
                        No saved searches
                    </div>
                </div>
        } else {
            searches = 

                    this.props.searches.all.map( (search, idx) => {
                        return (<div className="search-item-parent" key={idx}>
                                    <div className="search-item-header">
                                        <a href=""
                                            className="profile-search-button"
                                            onClick={(e) => this.handleLabelClick(e, search.query)}
                                        >
                                            <div className="profile-search-label">
                                                {search.label}
                                            </div>

                                            {/* <button
                                                className="profile-search-delete"
                                                onClick={ (e) => this.handleDeleteClick(e, search._id) }
                                            > */}
                                                {/* Delete Search */}
                                            <div className="profile-search-delete">
                                                {/* <svg className="profile-search-delete-icon" onClick={(e) => this.handleDeleteClick(e, search._id)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"></path></svg> */}
                                                <svg className="profile-search-delete-icon" onClick={(e) => this.handleDeleteClick(e, search._id)} aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>
                                                {/* <svg className="profile-search-delete-icon" onClick={(e) => this.handleDeleteClick(e, search._id)} aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg> */}
                                            </div>
                                            {/* </button> */}
                                        </a>

                                    </div>

                                    <div className="search-item-details">
                                        {/* TODO output highlights from within object {search.query} */}
                                        {(search.query["brand"] !== "") ? ("Brand: " + search.query["brand"] + " ") : null }
                                        {(search.query["case"] !== "") ? ("Case: " + search.query["case"] + " ") : null }
                                        {(search.query["movement"] !== "") ? ("Movement: " + search.query["movement"] + " ") : null } 
                                        {(search.query["price"] !== "") ? ("Price: " + search.query["price"] + " ") : null }
                                        {(search.query["selectedMovement"] !== "") ? ("Selected Movement: " + search.query["selectedMovement"] + " ") : null }
                                        {(search.query["selectedTier"] !== "") ? ("Selected Tier: " + search.query["selectedTier"] + " ") : null }
                                        {(search.query["style"] !== "") ? ("Style: " + search.query["style"] + " ") : null }
                                    </div>
                                </div>)
                    })

        }

        if (!this.props.currentUser.handle) {
            return (
                <div className="profile-page-container">
                    <div className="profile-page-intro-text">
                        Please log in to see your profile page.
                    </div>
                </div>
            )
        } else {
            return (
                <div className="profile-page-container">
                    <div className="profile-page-intro-text">
                        Welcome, {this.props.currentUser.handle}:
                    </div>
                    <div className="search-items-container">
                        <div className="search-items-header"> Your saved searches (click to open search results): </div>
                        <div className="search-items-index">{searches}</div>
                    </div>
                </div>
            );
        }

    }
  }
}

export default ProfilePage;



// DONE TODO add saved searches to global state OR pull searches from DB on open of profile page
// TODO add query parameters to search label
// TODO iterate across reviews for all watches to show any from the user
// DONE TODO profile page should reflect only logged in OR any user
// DONE TODO add check for data loaded before render
// DONE TODO initial styling for profile page/test
// DONE TODO add link from search label to hit search api
// DONE TODO delete button for label
// TODO component for search item
// TODO add navbar to profile page

// TODO return link to main search page
// TODO reorg search item panel to combined layout
// TODO loading icon
