import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Canvas from './Components/Canvas/canvas';
import Layout from './hoc/layout/Layout';
import Home from './Components/Home/Home';
import Recognize from './Components/recognize/recognize';
import './App.css';

class App extends Component{
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Canvas} />
        <Route path="/recognize" exact component={Recognize}/>
      </Switch>
    );

    return (
      // <Layout>
      //     {routes}
      //   </Layout>
      <Home/>
    );
  }
}

export default App;
