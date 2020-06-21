import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Redirect, withRouter } from 'react-router-dom';

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

    update(field) {
        return e => {
            let newSearchStateProperty = Object.assign({}, this.state)[field];
            let existsInSearchState = this.state[field].includes(e.currentTarget.value);
            if ((e.currentTarget.checked) && (!existsInSearchState)) {
                newSearchStateProperty.push(e.currentTarget.value);
            } else {
                newSearchStateProperty = newSearchStateProperty.filter( singleOption  => singleOption !== e.currentTarget.value);
            }

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

        let optionListGenerator = optionsArr => (
            eval(optionsArr + "Options").length > 0 &&
            eval(optionsArr + "Options").map((singleOption, i) => (
                <label key={ singleOption.value }>{ singleOption.value }
                    {/* { (!this.state[optionsArr].includes(singleOption)) */}
                        <input type="checkbox" id={ singleOption.value } name={ singleOption.value } value={ singleOption.value } onChange={ this.update(optionsArr) }/>
                        {/* : <input type="checkbox" id={ singleOption.value } name={ singleOption.value } value={ singleOption.value } onChange={ this.update(optionsArr) } checked/> */}
                    {/* } */}
                </label>
            ))
        );

        let capitalize = str => (
            str[0].toUpperCase() + str.slice(1)
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
            <div className="search-transparent">
                <h1>Start your search:</h1>
                    { properties.map( property => (
                        <div key={ property }>
                            { capitalize(property) }
                            <br/>
                            { optionListGenerator(property) }
                            <br/>
                            <br/>
                        </div>
                    )) }

                {/* <Tabs>
                    <TabList>
                        { properties.map( property => (
                            <Tab key={ property }>{ capitalize(property) }</Tab>
                        )) }
                    </TabList>
                    { properties.map( property => (
                        <TabPanel className={ property + " input" } id={ property } key={ property }>
                            { optionListGenerator(property) }
                        </TabPanel>
                    )) }
                </Tabs> */}
                <form className="splash-form" onSubmit={ this.handleSubmit }>
                    <input type="submit" value="Submit" className="splash-form-submit"/>
                </form>
            </div>
        );
    };
};

export default withRouter(SearchForm);
