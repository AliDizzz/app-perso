import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Post from './components/pages/posts/Post';
import Posts from './components/pages/posts/Posts';
import Account from './components/pages/users/Account';
import Login from './components/pages/users/Login';
import Register from './components/pages/users/Register';

function App() {
  return (

    <HashRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </HashRouter>

  );
}

export default App;
