import React from 'react';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watches = ''
        }
    }

    componentDidMount() {
        this.props.fetchSearch()
            .then(res => this.setState({ watches: res.watches}))
    }

    render() {
        const watches = Object.values(this.state.subjects);
        return (
            <div className='search-result-index'>
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

export default Index;