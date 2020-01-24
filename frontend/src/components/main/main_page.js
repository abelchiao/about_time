import React from 'react';
import MainSearchComponent from './main_seach_component';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <MainSearchComponent />
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
                <section className="search">
                    {/* <MainSearchComponent /> */}
                </section>
            </div>
        );
    }
}

export default MainPage;