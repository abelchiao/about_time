import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <section className="intro">
                    <header className="banner">
                        <h1>About Time</h1>
                    </header>
                    <div className="summary">
                        <p>A curated list of watch recommendations, tailored to just what you are looking for. It's About Time.</p>
                    </div>
                </section>
            <footer>
                Watch recommendations
            </footer>
            </div>
        );
    }
}

export default MainPage;