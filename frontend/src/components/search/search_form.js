import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: '',
            model: '',
            price: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const search = Object.assign({}, this.state);
        this.props.fetchWatches(search)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

   render() {     
        return (
            <div className="splash ui top attached tabular menu">
                <h1>Start your search:</h1>
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <div className="price input">
                        <h2>How much are you looking to spend?</h2>
                        <div className="price-inputs">
                            <label>
                                <input type="radio" name="tier0" value="100-300" />
                                $100 - 300
                            </label>

                            <label>
                                <input type="radio" name="tier1" value="300-500" />
                                $300 - 500
                            </label>

                            <label> 
                                <input type="radio" name="tier2" value="500-1000" />
                                $500 - 1000
                            </label>

                            <label>
                                <input type="radio" name="tier3" value="1000+" />
                                $1000 +
                            </label>
                        </div>
                    </div>

                    <div className="brand input">
                        <h2>Enter preferred brand & model (or leave blank if no preference)</h2>
                        <input type="text"
                            value={this.state.brand}
                            onChange={this.update('brand')}
                            placeholder="Brand, e.g. 'Casio'"
                        />
                    </div>

                    <div className="model input">
                        <input type="text"
                            value={this.state.model}
                            onChange={this.update('model')}
                            placeholder="Model"
                        />
                    </div>

                    <br />
                    <input type="submit" value="Submit" className="splash-form-submit"/>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SearchForm);