import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Components/Navigation';
import Categories from './Redux/Categories/Categories';
import BookContainer from './Components/BookContainer';
import store from './Redux/ConfigureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BookContainer />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
