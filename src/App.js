import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import AppNavBar from './components/AppNavBar';
import { Provider } from 'react-redux';
import store from './stores';
import Book from './pages/book';
import Anime from './pages/anime';
import {Auth} from './pages/auth';

import itemTypes from './actions/types'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Items} from './pages/items'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppNavBar />
          <Switch>
            <Route exact path="/" render={(routeProps) => (<Items {...routeProps} itemType={itemTypes.MOVIE}/>)} />
            <Route path="/auth" component={Auth} />
            <Route path="/movie" render={(routeProps) => (<Items {...routeProps} itemType={itemTypes.MOVIE}/>)} />
            <Route path="/anime" render={(routeProps) => (<Items {...routeProps} itemType={itemTypes.ANIME}/>)} />
            <Route path="/book" render={(routeProps) => (<Items {...routeProps} itemType={itemTypes.BOOK}/>)} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
