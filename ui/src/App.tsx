import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppHeader from './components/header/header';
import MainPage from './pages/main/main-page';
import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="ui-base-layout">
          <AppHeader/>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  };
}

export default App;
