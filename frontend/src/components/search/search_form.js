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
        const brands = [
            { id: 1, value: "Baume&Mercier" },
            { id: 2, value: "Citizen" },
            { id: 3, value: "Movado" },
            { id: 4, value: "Tag Heur" },
            { id: 5, value: "Timex" },
            { id: 6, value: "Tissot" }
        ];

        const brandsList = (brands.length > 0)
            && brands.map((brand, i) => {
                return (
                    <option key={i} value={ brand.value }>
                        { brand.value }
                    </option>
                );
            }, this);

        const styles = [
            { id: 1, value: 'Casual' },
            { id: 2, value: 'Classic' },
            { id: 3, value: 'Formal' },
            { id: 4, value: 'Sporty' }
        ];

        const stylesList = (styles.length > 0)
            && styles.map((style, i) => {
                return (
                    <option key={ i } value={ style.value }>
                        { style.value }
                    </option>
                );
            }, this);

        const caseType = [
           { id: 1, value: "Gold" },
           { id: 2, value: "Polished" },
           { id: 3, value: "Stainless Steel" },
           { id: 4, value: "Titanium" }
        ];

        const caseTypeList = caseType.length > 0
            && caseType.map((caseType, i) => {
                return (
                    <option key={ i } value={ caseType.value }>
                        { caseType.value }
                    </option>
                );
            }, this);


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
                        <div className="radio-inputs">
                            <label>
                                <input type="radio" name="tier0" value="100-300" checked={ this.state.price === "100-300" } onChange={ this.update('price') }/>
                                $100 - 300
                            </label>

                            <label>
                                <input type="radio" name="tier1" value="300-500" checked={ this.state.price === "300-500" } onChange={ this.update('price') }/>
                                $300 - 500
                            </label>

                            <label>
                                <input type="radio" name="tier2" value="500-1000" checked={ this.state.price === "500-1000" } onChange={ this.update('price') }/>
                                $500 - 1000
                            </label>

                            <label>
                                <input type="radio" name="tier3" value="1000+" checked={ this.state.price === "1000+" } onChange={ this.update('price') }/>
                                $1000 +
                            </label>
                        </div>
                    </TabPanel>

                    <TabPanel className="movement input" id="movement">
                        <div className="radio-inputs">
                            <label>
                                <input type="radio" name="movement0" value="Automatic" checked={ this.state.movement === "Automatic" } onChange={ this.update('movement') }/>
                                Automatic
                            </label>

                            <label>
                                <input type="radio" name="movement1" value="Quartz" checked={ this.state.movement === "Quartz" } onChange={ this.update('movement') }/>
                                Quartz
                            </label>

                            <label>
                                <input type="radio" name="movement2" checked={ this.state.movement === "Mechanical" } onChange={ this.update('movement') }/>
                                Mechanical
                            </label>
                        </div>
                    </TabPanel>

                    <TabPanel className="brand input">
                        <select className="brand-list input-select" value={ this.state.brand } onChange={ this.update('brand') }>
                            <option value="none" hidden>Brand</option>
                            { brandsList }
                        </select>
                    </TabPanel>

                    <TabPanel className="style input">
                        <select className="style-list input-select" value={ this.state.style } onChange={ this.update('style') }>
                            <option value="none" hidden>Style</option>
                            { stylesList }
                        </select>
                    </TabPanel>

                    <TabPanel className="case input">
                        <select className="case-list input-select" value={ this.state.case } onChange={ this.update('case') }>
                            <option value="none" hidden>Case</option>
                            { caseTypeList }
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
