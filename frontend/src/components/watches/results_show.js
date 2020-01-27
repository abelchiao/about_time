import React from 'react';

class ResultsShow extends React.Component {
    constructor(props) {
        super(props);

        // this.openWatchModal = this.openWatchModal.bind(this);
    }

    // openWatchModal(e) {
    //     console.log(e.currentTarget.value)
    //     this.props.openModal('show-watch', e.currentTarget.value)
    // }

    render() {
        return (
            <div className="results-background">
                <div className="search-result-show">
                    <div className="top-three-row">
                        <h1>The top three matches are:</h1>
                            <ul>
                                { this.props.topThree.map((watch, idx) =>
                                    <li key={idx} value={ watch._id } onClick={() => this.props.openModal('show-watch', watch._id) }>
                                        {/* { watch._id } */}
                                        <img alt='' className='watch-photo' src={watch.imageURL}></img>
                                        <br />
                                        { watch.brand }
                                        <br />
                                        { watch.model }
                                        <br />
                                        { watch.price }
                                    </li>
                                    )
                                }
                            </ul>
                    </div>


                    {/* <div className="other-results">
                        <ul>
                            {this.props.otherResults.map((watch, idx) =>
                                <li key={idx}>after Top Three Watch picture</li>
                            )
                            }
                        </ul>
                    </div> */}

                </div>

            </div>
        )
    }
}

export default ResultsShow;