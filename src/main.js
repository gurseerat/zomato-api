import React from 'react';
import ReactDOM from 'react-dom';

import {
    browserHistory,
    Router,
    Route
  } from 'react-router-dom'; 
  import {Home} from './App';
  import Dashboard from './dashboard';

ReactDOM.render(<Router history = {browserHistory}>
    <Route exact path = "/" component = {Home}>
        <Route path = "dashboard" component = {Dashboard} />
    </Route>
 </Router>, document.getElementById('space'));


