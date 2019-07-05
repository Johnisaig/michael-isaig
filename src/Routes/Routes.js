import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../Forms/Home.js';
import About from '../Forms/About.js';

class Routes extends Component {

    render(){
        return(
          <HashRouter>
              <React.Fragment>
                <Route path="/home" component={Home} exact/>
                <Route path="/about" component={About} exact/>
            </React.Fragment>
          </HashRouter>
        );
    }
}

export default Routes;