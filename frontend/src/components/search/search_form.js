import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          price: "",
          brand: "",
          style: "",
          case: "",
          errors: {},
          selectedTier: "",
          movement: "",
          selectedMovement: "",
          redirectToResults: false
        };

        this.handleSelectMovement = this.handleSelectMovement.bind(this);
        this.handleSelectPrice = this.handleSelectPrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSelectPrice(e) {
        this.setState({
          price: e.target.value
        //   selectedTier: e.target.name
        });
    }

    handleSelectMovement(e) {
        this.setState({
            movement: e.target.value
            // selectedMovement: e.target.name
        })
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
         { id: 1, value: "Baume&Mercier" },
         { id: 2, value: "Citizen" },
         { id: 3, value: "Movado" },
         { id: 4, value: "Tag Heur" },
         { id: 5, value: "Tissot" },
       ];

       const brandsList = brands.length > 0
        && brands.map((brand, i) => {
           return (
                <option key={i}
                value={ brand.value }
                >
                {/* onChange={this.update('brand')} > */}
                    { brand.value }
                </option>
           )
       }, this);

       const styles = [
           { id: 1, value: 'Casual' },
           { id: 2, value: 'Classic' },
           { id: 3, value: 'Formal' },
           { id: 4, value: 'Sporty' },
       ]

       const stylesList = styles.length > 0
           && styles.map((style, i) => {
               return (
                   <option key={ i }
                       value={ style.value }
                    >
                       {/* onChange={ this.update('style') } > */}
                       { style.value }
                   </option>
               )
           }, this);

       const caseType = [
         { id: 1, value: "Gold" },
         { id: 2, value: "Polished" },
         { id: 3, value: "Stainless Steel" },
         { id: 4, value: "Titanium" },
       ];

       const caseTypeList = caseType.length > 0
           && caseType.map((caseType, i) => {
               return (
                   <option key={ i }
                       value={ caseType.value }
                    >
                       {/* onChange={ this.update('caseType') } > */}
                       { caseType.value }
                   </option>
               )
           }, this);

        const redirectToResults = this.state.redirectToResults;
        if (redirectToResults === true) {
            return <Redirect to="/watches/search" />;
        }

        return (
          <div className="search-transparent">
            <h1>Start your search:</h1>
            <form className="splash-form" onSubmit={this.handleSubmit}>
              <div className="price input" id="price">
                <h2>How much are you looking to spend?</h2>
                <div className="radio-inputs">
                  <label>
                    <input
                      type="radio"
                      name="tier0"
                      value="100-300"
                      checked={this.state.price === "100-300"}
                      //   checked={this.state.selectedTier === "tier0"}
                      onChange={this.handleSelectPrice}
                    />
                    $100 - 300
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="tier1"
                      value="300-500"
                      checked={this.state.price === "300-500"}
                      //   checked={this.state.selectedTier === "tier1"}
                      onChange={this.handleSelectPrice}
                    />
                    $300 - 500
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="tier2"
                      value="500-1000"
                      checked={this.state.price === "500-1000"}
                      //   checked={this.state.selectedTier === "tier2"}
                      onChange={this.handleSelectPrice}
                    />
                    $500 - 1000
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="tier3"
                      value="1000+"
                      checked={this.state.price === "1000+"}
                      //   checked={this.state.selectedTier === "tier3"}
                      onChange={this.handleSelectPrice}
                    />
                    $1000 +
                  </label>
                </div>
              </div>

              <div className="movement input" id="movement">
                <h2>Select movement</h2>
                <div className="radio-inputs">
                  <label>
                    <input
                      type="radio"
                      name="movement0"
                      value="Automatic"
                      checked={this.state.movement === "Automatic"}
                      //   checked={this.state.selectedMovement === "movement0"}
                      onChange={this.handleSelectMovement}
                    />
                    Automatic
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="movement1"
                      value="Quartz"
                      checked={this.state.movement === "Quartz"}
                      //   checked={this.state.selectedMovement === "movement1"}
                      onChange={this.handleSelectMovement}
                    />
                    Quartz
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="movement2"
                      value="Mechanical"
                      checked={this.state.movement === "Mechanical"}
                    //   checked={this.state.selectedMovement === "movement2"}
                      onChange={this.handleSelectMovement}
                    />
                    Mechanical
                  </label>
                </div>
              </div>

              <div className="brand input">
                <h2>
                  Select preferred brand / style / case (leave blank if no
                  preference)
                </h2>
                <select className="brand-list input-select" value={this.state.brand} onChange={this.update('brand')}>
                  <option value="none" hidden>
                  {/* <option value="none" selected disabled hidden> */}
                    Brand
                  </option>
                  {brandsList}
                </select>
              </div>

              <div className="style input">
                <select className="style-list input-select" value={this.state.style} onChange={this.update('style')}>
                  <option value="none" hidden>
                  {/* <option value="none" selected disabled hidden> */}
                    Style
                  </option>
                  {stylesList}
                </select>
              </div>

              <div className="case input">
                <select className="case-list input-select" value={this.state.case} onChange={this.update('case')}>
                  <option value="none" hidden>
                  {/* <option value="none" selected disabled hidden> */}
                    Case
                  </option>
                  {caseTypeList}
                </select>
              </div>

              <br />
              <input
                type="submit"
                value="Submit"
                className="splash-form-submit"
              />
              {this.renderErrors()}
            </form>
          </div>
        );
    }
}

export default withRouter(SearchForm);