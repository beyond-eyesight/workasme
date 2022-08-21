import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "src/reportWebVitals";

import 'bootstrap/dist/css/bootstrap.min.css';
import TimeTrackersPage from "src/pages/management/TimeTrackersPage";
import {Provider} from "react-redux";
import {store} from "src/context/store";
import SignInPage from "src/pages/SignInPage";
import SignUpPage from "src/pages/SignUpPage";

ReactDOM.render(
  <Provider store={store}>

    <Router>
      <Switch>
        <Route exact path={"/"}  component={SignInPage}/>
        {/*<Route exact path={"/sign"}  component={SignPage}/>*/}
        <Route exact path={"/time-track"}  component={TimeTrackersPage}/>
        <Route exact path={"/sign-up"} component={SignUpPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
