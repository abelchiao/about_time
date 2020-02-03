import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser.handle) {
        console.log("handle: ", this.props.currentUser.handle);
        let tmp = this.props.fetchUserSearches();
        console.log("tmp: ", tmp)
    }
  }

  render() {
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    
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
              {
            //   console.log(this.props.searches.all[0].label)
              // this.props.searches.all[0].label
              // this.props.searches.all.map( search => {
              //     return search.label
              // })
              }
            </div>
          </div>
        );
    }

  }
}

export default ProfilePage;



// TODO add saved searches to global state OR pull searches from DB on open of profile page
// TODO iterate across reviews for all watches to show any from the user
// TODO profile page should reflect only logged in OR any user


