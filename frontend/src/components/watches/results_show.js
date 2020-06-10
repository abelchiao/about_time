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
    this.handleTagSearch = this.handleTagSearch.bind(this);
    this.handleTagSearchDelete = this.handleTagSearchDelete.bind(this);
    // this.openWatchModal = this.openWatchModal.bind(this);
  }

  // openWatchModal(e) {
  //     console.log(e.currentTarget.value)
  //     this.props.openModal('show-watch', e.currentTarget.value)
  // }

  handleTagSearch(e, searchProp) {
    e.preventDefault();
    let search = {};
    search[searchProp] = this.props.searches.new[searchProp];
    this.props.fetchWatches(search);
  }

  handleTagSearchDelete(e, searchProp) {
    e.preventDefault();
    e.stopPropagation();
    // console.log("Y123>>>>>>>>>", searchProp)
    let search = Object.assign(this.props.searches.new);
    delete search[searchProp];
    // console.log("SER>>>>>>>>>", search);
    this.props.fetchWatches(search);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (this.state.searchLabel === "") {
      alert("Add a label to save this search")
    } else {
      console.log("TETS", e)
        let data = {
        label: this.state.searchLabel,
        query: this.props.searches.new
        };
        // TODO duplicate clicks will fail unless search state is persisted to local storage
        this.props.newSearch(data)
        .then(() => alert("Search saved!") )
    }
  }

  render() {
    console.log("RESULTS PROPS: ", this.props);
    console.log("RESULTS STATE123: ", this.state);

    const { dataLoad } = this.props;
    if (!dataLoad) {
      return (
        <div className="results-background">
          <Navbar />
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
        </div>
      );
    };

    let saveSearchInputs;
    if (Object.entries(this.props.currentUser).length === 0 || !this.props.currentUser) {
        saveSearchInputs = (
          <div className="search-result-save-container">
            <input
              className="search-result-save-input"
              type="text"
              placeholder="Log in to save this search"
              size="45"
              value={ this.state.searchLabel }
              onChange={ this.update("searchLabel") }
            ></input>
            <button className="search-result-save-button" onClick={ () => alert("Log in to save this search!") }>
              Save Search
            </button>
          </div>
        );
    } else {
        saveSearchInputs = (
          <div className="search-result-save-container">
            <input
              className="search-result-save-input"
              type="text"
              placeholder=" Add a label to save this search"
              // size="45"
              value={ this.state.searchLabel }
              onChange={ this.update("searchLabel") }
            ></input>
            <button className="search-result-save-button" onClick={ this.handleSubmit }>
              Save Search
            </button>
          </div>
        );
    }

    let searchQueryTags =
      (this.props.searches !== undefined)
      ? Object.keys(this.props.searches.new)
          .map( searchProp => (
            (this.props.searches.new[searchProp] !== "")
              ? <li className="search-result-query-tags-list-item" key={ searchProp } onClick={ e => this.handleTagSearch(e, searchProp) }>
                  <div className="search-result-query-tags-list-item-text">
                    { (searchProp.toUpperCase() + ": " + this.props.searches.new[searchProp] + " ") }
                  </div>
                  <div className="search-result-query-tags-list-item-delete">
                    <svg className="search-result-query-tags-list-item-delete-icon" onClick={ e => this.handleTagSearchDelete(e, searchProp) } aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>
                  </div>
                </li>
              : null
            )
          )
      : null;
    if (searchQueryTags !== null) {
      searchQueryTags = (Object.values(searchQueryTags).every( v => (v == null ) )) ? <div>NO SEARCH PARAMETERS SELECTED</div> : searchQueryTags;
    }

    return (
      // (this.props.dataLoad === true)
      // ?
        // return (
        <div className="results-background">
          <Navbar />
          <div className="search-result-show">
            <div className="search-result-nav-container">
              {/* <Link className="back-to-search" to="/">
                Search again
              </Link> */}
              {/* <div className="search-result-save-container"> */}
                {saveSearchInputs}
              {/* </div> */}
            </div>
{/* TODO add query tags here */}
            {/* <div className="search-result-query-tags"> */}
            <div className="search-result-query-tags">
              {/* Current search parameters: */}
              <ul className="search-result-query-tags-list">
                { searchQueryTags }
              </ul>
            </div>
            {/* </div> */}
            <div className="top-three-row">
              {/* <h1>The top matches are:</h1> */}
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
                    />
                    <br />
                    {watch.brand}
                    <br />
                    {watch.model}
                    <br />
                    ${watch.price}
                  </li>
                ))}
{/* TODO add other results here */}
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
    // : 
    //   <div>
    //       "TEST LOADING"
    //   </div>
    );
  }
}

export default ResultsShow;