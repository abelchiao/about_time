import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loaded: false
    };
  }

  async componentDidMount() {
    if (this.props.currentUser.handle) {
        await this.props.fetchUserSearches()
        this.setState({loaded: true});
    }
  }

  render() {
    console.log("STATE: ", this.state);
    console.log("PROPS: ", this.props);

    if (this.state.loaded === false) {
        // console.log("FALSE STATE TRIGGER")
        return null
    } else {

        let searches;
        if ((this.props.searches.all.length === undefined) || (this.props.searches.all.length === 0)) {
            searches = <div>No saved searches</div>
        } else {
            searches = this.props.searches.all.map( (search, idx) => {
                    return <p key={idx}>{search.label}</p>
                })
        }

        if (!this.props.currentUser.handle) {
            return (
                <div className="profile-page-container">
                    Please log in to see your profile page.
                </div>
            )
        } else {
            return (
            <div className="profile-page-container">
                <p>Welcome, {this.props.currentUser.handle}:</p>

                <div className="search-items-container">
                    { searches }
                </div>
            </div>
            );
        }

    }
  }
}

export default ProfilePage;



// DONE TODO add saved searches to global state OR pull searches from DB on open of profile page
// TODO iterate across reviews for all watches to show any from the user
// DONE TODO profile page should reflect only logged in OR any user
// TODO add link from search label to hit search api
// TODO add query parameters to search label
// DONE TODO add check for data loaded before render
// TODO delete button for label
// TODO component for search item

