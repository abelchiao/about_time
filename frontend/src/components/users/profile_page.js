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

        this.props.fetchWatches(query);
        this.props.history.push(`/watches/search`);
    };

    handleDeleteClick(e, searchId) {
        e.preventDefault();
        e.stopPropagation();
        
        let alertText = document.getElementsByClassName("alert-text")[0];
        alertText.innerHTML = "DELETING SEARCH...";
        this.props.deleteSearch(searchId)
            .then( () => alertText.innerHTML = "SEARCH DELETED!")
            .catch( () => alertText.innerHTML = "ERROR: SEARCH NOT DELETED!");
        document.getElementsByClassName("alert")[0].style.display = "flex";
    };

    render() {

        if (this.state.loaded === false) {
            return (
                <div className="profile-page-container">
                    {/* <Navbar /> */}
                    <div className="profile-page-intro-text">
                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
                    </div>
                </div>
            );
        } else {
            let searches =
                ((this.props.searches.all.length === undefined) || (this.props.searches.all.length === 0))
                    ?   <div className="search-item-parent">
                            <div className="search-item-header">
                                No saved searches
                            </div>
                        </div>
                    :   this.props.searches.all.map( (search, idx) => (
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
                                                        (search.query[search_prop].length !== 0)
                                                        ?   search.query[search_prop].map( singleOption => (
                                                                <li className="search-item-details-list-item" key={ singleOption }> { singleOption } </li>
                                                            ))
                                                        :   null
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        );

            return (
                <div className="profile-page-container">
                    {/* <Navbar /> */}
                    <div className="profile-page-intro-text">
                        { (!this.props.currentUser.handle)
                            ?   "Please log in to see your profile pages."
                            :   "Welcome, " + this.props.currentUser.handle + "!"
                        }
                    </div>
                    { (this.props.currentUser.handle)
                        ?   <div className="search-items-container">
                                <div className="search-items-header">Saved searches</div>
                                <div className="search-items-index">{ searches }</div>
                            </div>
                        :   null
                    }
                </div>
            );
        };
    };
};

export default ProfilePage;
