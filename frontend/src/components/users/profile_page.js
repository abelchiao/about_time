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

  render() {
    console.log("STATE: ", this.state);
    console.log("PROPS: ", this.props);

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
                <div>
                    {this.props.searches.all.map( (search, idx) => {
                        return (<div className="search-item-parent" key={idx}>
                                    <div className="search-item-header">
                                        <a href="" className="profile-search-button" onClick={(e) => this.handleLabelClick(e, search.query)}>{search.label}</a>
                                        <button
                                            className="profile-search-delete"
                                            onClick={this.handleDeleteClick}
                                        >
                                            Delete Search
                                        </button>
                                    </div>
                                </div>)
                    })}
                </div>
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
                    <div className="search-items-header"> Your saved searches (click to see results): </div>
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
// TODO add link from search label to hit search api
// TODO delete button for label
// TODO component for search item
// TODO add navbar to profile page

