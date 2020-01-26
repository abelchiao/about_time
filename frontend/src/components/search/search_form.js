import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: '',
            brand: '',
            style: '',
            errors: {},
            redirectToResults: false
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
        .then(this.setState({ redirectToResults: true }));
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
       const brands = [
           { id: 0, value: '' },
           { id: 1, value: 'Casio' },
           { id: 2, value: 'Citizen' },
           { id: 3, value: 'Omega' },
           { id: 4, value: 'Tissot' },
       ]

       const brandsList = brands.length > 0
        && brands.map((brand, i) => {
           return (
               <option key={i}
                value={ brand.value }
                onChange={this.update('brand')} >
                    { brand.value }
                </option>
           )
       }, this);

       const styles = [
           { id: 0, value: ''},
           { id: 1, value: 'casual' },
           { id: 2, value: 'formal' },
           { id: 3, value: 'sporty' },
       ]

       const stylesList = styles.length > 0
           && styles.map((style, i) => {
               return (
                   <option key={ i }
                       value={ style.value }
                       onChange={ this.update('style') } >
                       { style.value }
                   </option>
               )
           }, this);

        const redirectToResults = this.state.redirectToResults;
        if (redirectToResults === true) {
            return <Redirect to="/watches/search" />;
        }

        return (
            <div className="splash-background ui top attached tabular menu">
                <h1>Start your search:</h1>
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <div className="price input" id="price">
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
                        <h2>Select preferred brand & style (leave blank if no preference)</h2>
                        <select className="brand-list input-select">
                            { brandsList }
                        </select>
                    </div>

                    <div className="style input">
                        <select className="style-list input-select">
                            { stylesList }
                        </select>
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