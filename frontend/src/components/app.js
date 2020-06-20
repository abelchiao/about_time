import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollUp from './navbar/scrollUp';
import Modal from './modal/modal';
import ProfilePageContainer from './users/profile_page_container';
import MainPage from './main/main_page';
import ResultsShowContainer from './watches/results_show_container';
import SearchFormContainer from './search/search_container';

const App = () => (
    <div id="app">
        <ScrollUp />
        <Modal />
        <Switch>
        <Route exact path="/profile" component={ProfilePageContainer} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchFormContainer} />
        <Route exact path="/watches/search" component={ResultsShowContainer} />
        </Switch>
    </div>
);

export default App;
