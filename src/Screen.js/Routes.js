import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitForm from './SubmitForm';

const Main = () => {
    return ( 
        <BrowserRouter>
        <Switch>
          <Route  exact path="/"  component={SubmitForm} />
        </Switch>
        </BrowserRouter>

     );
}
 
export default Main;