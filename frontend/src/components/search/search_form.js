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

        let search = {
            brand: this.state.brand,
            model: this.state.model,
            price: this.state.price
        }
        // this.props.receiveSearch(search)
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

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.brand}
                        onChange={this.update('brand')}
                        placeholder="Brand, e.g. 'Casio'"
                    />
                    <br />
                    <input type="text"
                        value={this.state.model}
                        onChange={this.update('model')}
                        placeholder="Model"
                    />
                    <br />
                    <p>Select a price range:</p>
                    {/* <input type="text"
                        value={this.state.price}
                        onChange={this.update('price')}
                        placeholder="price"
                    /> */}
                    <input type="radio" id="tier0" name="price" value="100-300" />
                    <label for="100-300">$100-300</label>

                    <input type="radio" id="tier1" name="price" value="300-500" />
                    <label for="100-300">$300-500</label>

                    <input type="radio" id="tier2" name="price" value="500-1000" />
                    <label for="100-300">$500-1000</label>

                    <input type="radio" id="tier3" name="price" value="1000+" />
                    <label for="100-300">$1000+</label>
                    <br />
                    <input type="submit" value="Submit" />
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default withRouter(SearchForm);