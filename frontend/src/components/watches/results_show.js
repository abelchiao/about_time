import React from 'react';
import Navbar from '../navbar/navbar';

class ResultsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLabel: "",
            resultWatchesCount: 9,
            sortBy: "price"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTagSearch = this.handleTagSearch.bind(this);
        this.handleTagSearchDelete = this.handleTagSearchDelete.bind(this);
        this.handleShowSearch = this.handleShowSearch.bind(this);
        this.loadMoreWatches = this.loadMoreWatches.bind(this);
    };

    componentWillMount() {
        window.addEventListener('scroll', this.loadMoreWatches);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMoreWatches);
    };
  
    loadMoreWatches() {
        if ((window.innerHeight + document.documentElement.scrollTop) === document.scrollingElement.scrollHeight) {
          this.setState({resultWatchesCount: this.state.resultWatchesCount + 6});
        };
    };

    handleTagSearch(e, searchProp) {
        e.preventDefault();
        let search = {};
        search[searchProp] = this.props.searches.new[searchProp];
        this.props.resetDataLoad();
        this.props.fetchWatches(search);
    };

    handleTagSearchDelete(e, searchProp) {
        e.preventDefault();
        e.stopPropagation();
        let search = Object.assign(this.props.searches.new);
        delete search[searchProp];
        this.props.resetDataLoad();
        this.props.fetchWatches(search);
    };

    handleShowSearch() {
        let sortTags = document.getElementsByClassName("search-result-query-tags-list-sort")[0];
        sortTags.classList.toggle('hidden');
        let sortIconRight = document.getElementsByClassName("search-result-query-tags-list-item-sort-icon-right")[0];
        sortIconRight.classList.toggle('hidden');
        let sortIconDown = document.getElementsByClassName("search-result-query-tags-list-item-sort-icon-down")[0];
        sortIconDown.classList.toggle('hidden');
    };

    update(field) {
        return ( e => this.setState({ [field]: e.currentTarget.value }) );
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.searchLabel === "") {
           alert("Add a label to save this search");
        } else {
            let data = {
                label: this.state.searchLabel,
                query: this.props.searches.new
            };
            this.props.newSearch(data)
                .then(() => alert("Search saved!") );
        };
    };

    render() {
        const { dataLoad } = this.props;
        if (!dataLoad) {
            return (
                <div className="results-background">
                    <Navbar />
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
                </div>
            );
        };

        let saveSearchInputs = 
            (Object.entries(this.props.currentUser).length === 0 || !this.props.currentUser)
            ?
                <div className="search-result-save-container">
                    <input className="search-result-save-input" type="text" placeholder="Log in to save this search" value={ this.state.searchLabel } onChange={ this.update("searchLabel") } ></input>
                    <button className="search-result-save-button" onClick={ () => alert("Log in to save this search!") }>
                        Save Search
                    </button>
                </div>
        
            :
                <div className="search-result-save-container">
                    <input className="search-result-save-input" type="text" placeholder="Add a label to save this search" value={ this.state.searchLabel } onChange={ this.update("searchLabel") } ></input>
                    <button className="search-result-save-button" onClick={ this.handleSubmit }>
                        Save Search
                    </button>
                </div>;

        let searchQueryTags =
            (this.props.searches !== undefined)
            ? 
                Object.keys(this.props.searches.new)
                    .map( searchProp => (
                        (this.props.searches.new[searchProp] !== "")
                        ? 
                            <li className="search-result-query-tags-list-item" key={ searchProp } onClick={ e => this.handleTagSearch(e, searchProp) }>
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
            :
                null;

        if (searchQueryTags !== null) {
            searchQueryTags = 
                (Object.values(searchQueryTags).every( v => (v == null ) ))
                ?   <div>NO SEARCH PARAMETERS SELECTED</div>
                :   searchQueryTags;
        };

        let searchSortTags =
            ["price", "brand", "model", "movement", "case", "style", "gender"].map( searchProp => (
                <li className="search-result-query-tags-list-item" key={ searchProp } onClick={ () => (this.state.sortBy === searchProp) ? this.setState({ sortBy: (searchProp + "Reversed") }) : this.setState({ sortBy: searchProp }) }>
                    <div className="search-result-query-tags-list-item-text">
                        { searchProp.toUpperCase() }
                    </div>
                    <div className="search-result-query-tags-list-item-sort">
                        { (this.state.sortBy === searchProp)
                            ? <svg className="search-result-query-tags-list-item-sort-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                            : <svg className="search-result-query-tags-list-item-sort-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
                        }
                    </div>
                </li>
            )
        );

        let sortBy = this.state.sortBy;
        if ((sortBy === "brandReversed") || (sortBy === "caseReversed") || (sortBy === "modelReversed") || (sortBy === "movementReversed") || (sortBy === "styleReversed") || (sortBy === "genderReversed") || (this.state.sortBy === "priceReversed")) {
            sortBy = sortBy.slice(0, sortBy.indexOf("Reversed"));
        };

        let allWatches = this.props.watches.slice();
        if (sortBy === "price") { 
            allWatches.sort( (a, b) => (b.price - a.price) ); 
        };
        if ((sortBy === "brand") || (sortBy === "case") || (sortBy === "model") || (sortBy === "movement") || (sortBy === "style") || (sortBy === "gender")) {
            allWatches.sort( (a, b) => ((b[sortBy] || "").localeCompare(a[sortBy] || "")) );
        };
        if ((this.state.sortBy === "brandReversed") || (this.state.sortBy === "caseReversed") || (this.state.sortBy === "modelReversed") || (this.state.sortBy === "movementReversed") || (this.state.sortBy === "styleReversed") || (this.state.sortBy === "genderReversed") || (this.state.sortBy === "priceReversed")) {
            allWatches.reverse();
        };

        let resultWatches = allWatches.slice(0, this.state.resultWatchesCount);

        return (
            <div className="results-background">
                <Navbar />
                <div className="search-result-show">
                    <div className="search-result-nav-container">
                        { saveSearchInputs }
                    </div>
                    <div className="search-result-query-tags">
                        <ul className="search-result-query-tags-list">
                            { searchQueryTags }
                        </ul>
                    </div>
                    <div className="search-result-query-tags-sort">
                        <div className="search-result-query-tags-list-sort-button" onClick={ () => this.handleShowSearch() }>
                            <div className="search-result-query-tags-list-item-text">
                                SORT
                            </div>
                            <div className="search-result-query-tags-list-item-sort">
                                <svg className="search-result-query-tags-list-item-sort-icon-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                                <svg className="search-result-query-tags-list-item-sort-icon-down hidden" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
                            </div>
                        </div>
                        <ul className="search-result-query-tags-list-sort hidden">
                            { searchSortTags }
                        </ul>
                    </div>
                    <div className="top-three-row">
                        <ul>
                            { resultWatches.map( (watch, idx) => (
// TODO css for watch details
                                <li key={ idx } value={ watch._id } onClick={ () => this.props.openModal("show-watch", watch._id) }>
                                    <img alt="" className="watch-photo" src={ watch.imageURL } />
                                    <br />
                                    { watch.brand }
                                    <br />
                                    { watch.model }
                                    <br />
                                    ${ watch.price }
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};

export default ResultsShow;
