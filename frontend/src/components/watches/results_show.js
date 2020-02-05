import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

class ResultsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLabel: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.openWatchModal = this.openWatchModal.bind(this);
  }

  // openWatchModal(e) {
  //     console.log(e.currentTarget.value)
  //     this.props.openModal('show-watch', e.currentTarget.value)
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      label: this.state.searchLabel,
      query: this.props.searches.new
    };
    // TODO duplicate clicks will fail unless search state is persisted to local storage
    this.props.newSearch(data);
  }

  render() {
    console.log("RESULTS PROPS: ", this.props);
    console.log("RESULTS STATE: ", this.state);

    return (
      <div className="results-background">
        <Navbar />
        <div className="search-result-show">
          <br />
          <div className="search-result-nav-container">
            <Link className="back-to-search" to="/">
              Search again
            </Link>

            <div className="search-result-save-container">
              <input
                className="search-result-save-input"
                type="text"
                placeholder="Add label to save search"
                size="45"
                value={this.state.searchLabel}
                onChange={this.update("searchLabel")}
              ></input>
              <button className="search-result-save-input" onClick={this.handleSubmit}>Save Search</button>
            </div>
          </div>
          <div className="top-three-row">
            <h1>The top matches are:</h1>
            <ul>
              {this.props.topThree.map((watch, idx) => (
                <li
                  key={idx}
                  value={watch._id}
                  onClick={() => this.props.openModal("show-watch", watch._id)}
                >
                  <img
                    alt=""
                    className="watch-photo"
                    src={watch.imageURL}
                  ></img>
                  <br />
                  {watch.brand}
                  <br />
                  {watch.model}
                  <br />${watch.price}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="other-results">
                        <ul>
                            {this.props.otherResults.map((watch, idx) =>
                                <li key={idx}>after Top Three Watch picture</li>
                            )
                            }
                        </ul>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default ResultsShow;