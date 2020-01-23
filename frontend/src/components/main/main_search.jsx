import React from 'react';
import '../../css/splash.css';

class MainSearch extends React.Component {
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
        let prices = [{ id: 1, value: '$100-300' },
                    { id: 2, value: '$300-500'},
                    { id: 3, value: '$500-1000'},
                    { id: 4, value: '$1000+'}]
        let pricesList = prices.length > 0
            && prices.map((ele, i) => {
                return (
                    <option key={i} 
                            value={ele.value} 
                            onChange={this.update('price')}>
                                {ele.value}
                    </option>
                )
            }, this);
        return (
            <div className="splash">
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <h1>Search for watches</h1>
                    <div className="tab">
                        <input type="text"
                            value={this.state.brand}
                            onChange={this.update('brand')}
                            placeholder="Brand, e.g. 'Casio'"
                        />
                        <input type="text"
                            value={this.state.model}
                            onChange={this.update('model')}
                            placeholder="Model"
                        />
                        <label>Choose a Price Bracket:
                            <select>
                                {pricesList}
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="splash-form-submit"/>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default MainSearch;