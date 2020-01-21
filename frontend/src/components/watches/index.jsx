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
            .then(res => this.setState)
    }

    render() {
        return (
            <div className='search-result-index'>

            </div>
        )
    }
}