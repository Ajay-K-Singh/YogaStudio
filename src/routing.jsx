import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './containers/landing-page/landing-page';
import StudioInfo from './containers/studio-info/studio-info';

const Routing = () => (
  <main>
    <Router>
      <div>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/services' component={StudioInfo}/>
      </div>
    </Router>
  </main>
)

export default Routing;
