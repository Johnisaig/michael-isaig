import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Forms/Home.js';
import About from '../Forms/About.js';

class Routes extends Component {

    render(){
        return(
          <BrowserRouter>
              <React.Fragment>
                <Route path="/home" component={Home} exact/>
                <Route path="/about" component={About} exact/>
            </React.Fragment>
          </BrowserRouter>
        );
    }
}

export default Routes;