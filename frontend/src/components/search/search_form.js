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
                        placeholder="Brand"
                    />
                    <br />
                    <input type="text"
                        value={this.state.model}
                        onChange={this.update('model')}
                        placeholder="Model"
                    />
                    <br />
                    <input type="text"
                        value={this.state.price}
                        onChange={this.update('price')}
                        placeholder="price"
                    />
                    <input type="submit" value="Submit" />
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default withRouter(SearchForm);