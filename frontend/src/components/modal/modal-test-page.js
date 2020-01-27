import React from 'react';

class ModalTestPage extends React.Component {
  constructor(props) {
    super(props)
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.openWatchModal = this.openWatchModal.bind(this);
  };

  componentDidMount() {
    this.props.fetchWatches();
  }

  componentDidUpdate() {
    this.props.fetchWatches();
  }

  openLoginModal(e) {
    this.props.openModal('login')
  };

  openSignupModal(e) {
    this.props.openModal('signup')
  };

  openWatchModal(e) {
    // this.props.openModal('show-watch', '5e2a1c8184d4208edbcbef6a')
    this.props.openModal('show-watch', '5e2e335c4f5dc4062c94bd93')
  };

  render() {
    return (
      <div>
        <h1>Modal Test Page</h1>
        <h2>Signed in as: {this.props.currentUser.handle}</h2>
        <button onClick={this.openLoginModal} >
          Open login modal
        </button>
        <button onClick={this.openSignupModal}>
          Open signup modal
        </button>
        <button onClick={this.openWatchModal}>
          Open watch modal
        </button>

      </div>
    )
  };
}

export default ModalTestPage;