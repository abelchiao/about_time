import React from 'react';
import SearchContainer from '../search/search_container';

class MainPage extends React.Component {

    render() {
        return (
            <div className="splash-background">
                <section className="intro">
                    <header className="banner">
                        <h1>About Time</h1>
                    </header>
                    <div className="summary">
                        <p>A curated list of watch recommendations, tailored to just what you are looking for. It's About Time.</p>
                    </div>
                </section>
                <footer>
                    footer
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