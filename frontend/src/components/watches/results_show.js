import React from 'react';

class ResultsShow extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     watches: {},
        //     topThree: {}
        // };
    }


    render() {
        const anArray = [1]
        console.log(typeof anArray)
        console.log(anArray[0])
        console.log(this.props.watches)
        console.log(typeof this.props.watches)
        console.log(this.props.watches[0])
        return (
            <div className="search-result-show">
                <div className="top-three-row">
                    {/* <ul>
                        { this.props.topThree.map((watch, idx) =>
                            <li key={idx}>Top Three Watch picture</li>
                            )
                        }
                    </ul>
                </div>
                <div className="other-results">
                    <ul>
                            { this.props.otherResuts.map((watch, idx) => 
                                    <li key={idx}>after Top Three Watch picture</li>
                                )
                            }
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default ResultsShow;