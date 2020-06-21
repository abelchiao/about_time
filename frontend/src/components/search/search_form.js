import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Redirect, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: "",
            brand: "",
            style: "",
            case: "",
            movement: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    componentDidMount() {
        this.props.resetDataLoad();
    };

    handleSubmit(e) {
        e.preventDefault();

        const search = Object.assign({}, this.state);
        this.props.fetchWatches(search);
        this.props.history.push(`/watches/search`);
    };

    render() {
      
        let optionListGenerator = optionsArr => (
            eval(optionsArr).length > 0 &&
            eval(optionsArr).map((option, i) => (
                    <option key={ i } value={ option.value }>{ option.value }</option>
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

        const options = [
          "price",
          "movement",
          "brand",
          "style",
          "case"
        ];


        return (
            <div className="search-transparent">
                <h1>Start your search:</h1>
                <Tabs>
                    <TabList>
                        { options.map( singleOption => (
                            <Tab key={ singleOption }>{ capitalize(singleOption) }</Tab>
                        )) }
                    </TabList>
                    { options.map( singleOption => (
                        <TabPanel className={ singleOption + " input" } id={ singleOption } key={ singleOption }>
                            <select className={ singleOption + "-list input-select" } value={ this.state.price } onChange={ this.update(singleOption) }>
                                <option value="none" hidden>{ capitalize(singleOption) }</option>
                                { optionListGenerator(singleOption + "Options") }
                            </select>
                        </TabPanel>
                    )) }
                </Tabs>
                <form className="splash-form" onSubmit={ this.handleSubmit }>
                    <input type="submit" value="Submit" className="splash-form-submit"/>
                </form>
            </div>
        );
    };
};

export default withRouter(SearchForm);
