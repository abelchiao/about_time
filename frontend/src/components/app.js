import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// const path = require('path');

import MainPage from './main/main_page';
import Modal from './modal/modal';
import ModalTestPageContainer from './modal/modal-test-page-container';
import ResultsShowContainer from './watches/results_show_container';
import SearchFormContainer from './search/search_container';
import Navbar from './navbar/navbar';

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'));
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })
// }
const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path='/modal-test' component={ModalTestPageContainer} />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/search" component={SearchFormContainer} />
            <Route exact path="/watches/search" component={ResultsShowContainer} />
        </Switch>
    </div>
);

export default App;