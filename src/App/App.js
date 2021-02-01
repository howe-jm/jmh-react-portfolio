import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
export default class App extends React.Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/projects'} component={Projects} />
        <Route exact path={'/contact'} component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <div className='drop-box'>
        <div className='app-main'>
          <header>
            <Header />
          </header>
          <main>{this.renderRoutes()}</main>
          <footer>©2021 Jason Howe</footer>
        </div>
      </div>
    );
  }
}
