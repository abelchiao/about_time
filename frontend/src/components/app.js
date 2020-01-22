import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
// const path = require('path');

import MainPage from './main/main_page';
import SearchFormContainer from './search/search_container';

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'));
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })
// }
const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/search" component={SearchFormContainer} />
        </Switch>
    </div>
);

export default App;