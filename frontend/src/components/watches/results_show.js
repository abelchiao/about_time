import React from 'react';

class ResultsShow extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="search-result-show">

                <div className="top-three-row">
                    {/* <ul>
                        { this.props.topThree.map((watch, idx) =>
                            <li key={idx}>Top Three Watch picture</li>
                            )
                        }
                    </ul> */}
                    <ul>
                        <li><img src="https://us.tissotshop.com/media/catalog/product/cache/2/image/375x570/9df78eab33525d08d6e5fb8d27136e95/t/1/t122.417.16.011.00.png" width="278" height="428"></img></li>
                        <li><img src="https://us.tissotshop.com/media/catalog/product/cache/2/image/375x570/9df78eab33525d08d6e5fb8d27136e95/t/1/t122.417.16.011.00.png" width="278" height="428"></img></li>
                        <li><img src="https://us.tissotshop.com/media/catalog/product/cache/2/image/375x570/9df78eab33525d08d6e5fb8d27136e95/t/1/t122.417.16.011.00.png" width="278" height="428"></img></li>
                    </ul>
                </div>

                <div className="other-results">
                    <ul>
                            { this.props.otherResults.map((watch, idx) => 
                                    <li key={idx}>after Top Three Watch picture</li>
                                )
                            }
                    </ul>
                </div>

            </div>
        )
    }
}

export default ResultsShow;