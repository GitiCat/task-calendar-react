import React from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CalendarComponent from './components/calendar';
import SelectedDayComponent from './components/selected-day/index';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={CalendarComponent}/>
                <Route exact path='/selected/:day' component={SelectedDayComponent}/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}

export default App;