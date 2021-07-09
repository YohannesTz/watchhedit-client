import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import { Provider } from 'react-redux';
import store from './stores';

import Book from './pages/book';
import Anime from './pages/anime';
import Movie from './pages/movie';

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppNavBar />
          <Switch>
            <Route exact path="/" component={Movie} />
            <Route path="/movie" component={Movie} />
            <Route path="/anime" component={Anime} />
            <Route path="/book" component={Book} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
