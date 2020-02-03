import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    if (!this.props.currentUser.handle) return (
        <div>
            Please log in to see your profile page.
        </div>
    );

    return (
      <div className="profile-page-container">

        <p>Welcome, {this.props.currentUser.handle}:</p>

      </div>
    );

  }
}

export default ProfilePage;




// TODO add saved searches to global state OR pull searches from DB on open of profile page
// TODO iterate across reviews for all watches to show any from the user
// TODO profile page should reflect only logged in OR any user


