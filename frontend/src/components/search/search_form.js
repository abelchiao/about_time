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
            optionsArr.length > 0 &&
            optionsArr.map((option, i) => {
                return (
                    <option key={ i } value={ option.value }>{ option.value }</option>
                );
            })
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


        return (
            <div className="search-transparent">
                <h1>Start your search:</h1>
                <Tabs>
                    <TabList>
                        <Tab>Price</Tab>
                        <Tab>Movement</Tab>
                        <Tab>Brand</Tab>
                        <Tab>Style</Tab>
                        <Tab>Case</Tab>
                    </TabList>
                    <TabPanel className="price input" id="price">
                        <select className="price-list input-select" value={ this.state.price } onChange={ this.update('price') }>
                            <option value="none" hidden>Price</option>
                            { optionListGenerator(priceOptions) }
                        </select>
                    </TabPanel>
                    <TabPanel className="movement input" id="movement">
                        <select className="movement-list input-select" value={ this.state.movement } onChange={ this.update('movement') }>
                            <option value="none" hidden>Movement</option>
                            { optionListGenerator(movementOptions) }
                        </select>
                    </TabPanel>
                    <TabPanel className="brand input">
                        <select className="brand-list input-select" value={ this.state.brand } onChange={ this.update('brand') }>
                            <option value="none" hidden>Brand</option>
                            { optionListGenerator(brandOptions) }
                        </select>
                    </TabPanel>
                    <TabPanel className="style input">
                        <select className="style-list input-select" value={ this.state.style } onChange={ this.update('style') }>
                            <option value="none" hidden>Style</option>
                            { optionListGenerator(styleOptions) }
                        </select>
                    </TabPanel>
                    <TabPanel className="case input">
                        <select className="case-list input-select" value={ this.state.case } onChange={ this.update('case') }>
                            <option value="none" hidden>Case</option>
                            { optionListGenerator(caseOptions) }
                        </select>
                    </TabPanel>
                </Tabs>
                <form className="splash-form" onSubmit={ this.handleSubmit }>
                    <input type="submit" value="Submit" className="splash-form-submit"/>
                </form>
            </div>
        );
    };
};

export default withRouter(SearchForm);
