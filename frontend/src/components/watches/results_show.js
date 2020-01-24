import React from 'react';
class ResultsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watches = {}
        }
    }

    componentDidMount() {
        this.props.fetchSearch()
            .then(res => this.setState({ watches: res.watches}))
    }

    render() {
        const watches = Object.values(this.state.watches);
        return (
            <div className='search-result-show'>
                <ul>
                        {
                            watches.map((watch, idx) => 
                                <li key={idx}>{watch.brand}</li>
                            )
                        }
                </ul>
            </div>
        )
    }
}

export default ResultsShow;