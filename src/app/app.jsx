import React from 'react';
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CalendarComponent from './components/calendar';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={CalendarComponent}/>
            </Switch>
        </Router>
    )
}

export default App;