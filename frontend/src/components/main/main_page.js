import React from 'react';
import SearchContainer from '../search/search_container';
import Navbar from '../navbar/navbar';

class MainPage extends React.Component {

    render() {
        return (
            <div className="splash-background">
                {/* <Navbar /> */}
                <section className="intro">
                    <header className="banner">
                        <h1>About Time</h1>
                    </header>
                    <div className="summary">
                        <p>Find your next watch</p>
                    </div>
                </section>
                <footer>
                    {/* footer */}
                </footer>
                <section className="splash-search-transparent">
                    <div className="splash-search-box">
                        <SearchContainer />
                    </div>
                </section>
            </div>
        );
    }
}

export default MainPage;