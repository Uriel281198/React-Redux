import React from 'react';

import ReactDom from 'react-dom';


import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Results from './Components/results';
import Details from './Components/details/page';


const Root = (

    <BrowserRouter>
        <Switch>
            <Route path='/results' component={Results}/>
            <Route path='/details/:itemId' component={Details}/>
            <Redirect from='/' to='/results'/>
        </Switch>
    </BrowserRouter>


)


ReactDom.render(Root,document.getElementById('root'));