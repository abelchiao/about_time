import React from 'react'; 
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: [],
            brand: [],
            style: [],
            case: [],
            movement: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field, targetSingleOption) {
        return e => {
            let newSearchStateProperty = Object.assign({}, this.state)[field];
            let existsInSearchState = this.state[field].includes(targetSingleOption);
            if (!existsInSearchState) {
                newSearchStateProperty.push(targetSingleOption);
            } else {
                newSearchStateProperty = newSearchStateProperty.filter( singleOption  => singleOption !== targetSingleOption);

            }
            e.target.classList.toggle("search-form-property-option-checkbox-text-checked");

            this.setState({
                [field]: newSearchStateProperty
            });
        }
    };

    componentDidMount() {
        this.props.resetDataLoad();
    };

    componentDidUpdate() {
        console.log("CURR STATE", this.state)
    }

    handleSubmit(e) {
        e.preventDefault();

        const search = Object.assign({}, this.state);
        this.props.fetchWatches(search);
        this.props.history.push(`/watches/search`);
    };

    render() {

        let optionCheckboxGenerator = optionsArr => (
            eval(optionsArr + "Options").length > 0 &&
            eval(optionsArr + "Options").map((singleOption, i) => (
                <li className="search-form-property-option-checkbox-text" key={ singleOption.value } onClick={ this.update(optionsArr, singleOption.value) }>{ singleOption.value }</li>
            ))
        );

        const brandOptions = [
            { id: 1, value: "Baume&Mercier" },
            { id: 2, value: "Citizen" },
            { id: 3, value: "Movado" },
            { id: 4, value: "Tag Heur" },
            { id: 5, value: "Timex" },
            { id: 6, value: "Tissot" }
        ];

        const styleOptions = [
            { id: 1, value: 'Casual' },
            { id: 2, value: 'Classic' },
            { id: 3, value: 'Formal' },
            { id: 4, value: 'Sporty' }
        ];

        const caseOptions = [
           { id: 1, value: "Gold" },
           { id: 2, value: "Polished" },
           { id: 3, value: "Stainless Steel" },
           { id: 4, value: "Titanium" }
        ];

        const movementOptions = [
           { id: 1, value: "Automatic" },
           { id: 2, value: "Quartz" },
           { id: 3, value: "Mechanical" }
        ];

        const priceOptions = [
           { id: 1, value: "$100-300" },
           { id: 2, value: "$300-500" },
           { id: 3, value: "$500-1000" },
           { id: 4, value: "$1000+" }
        ];

        const properties = [
          "price",
          "movement",
          "brand",
          "style",
          "case"
        ];


        return (
            <div className="search-form-transparent">
                { properties.map( property => (
                    <div key={ property } className="search-form-property">
                        <div className="search-form-property-text">{ property.toUpperCase() }</div>
                        <ul className="search-form-property-options">{ optionCheckboxGenerator(property) }</ul>
                    </div>
                )) }
                <div className="search-form-submit-button-container">
                    <button className="search-form-submit-button" onClick={ this.handleSubmit }>
                        SEARCH
                    </button>
                </div>
            </div>
        );
    };
};

export default withRouter(SearchForm);
