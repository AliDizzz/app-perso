import React from 'react';
import { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log('scroll' + e.weelDeltaY);
    }

    window.addEventListener('wheel', handleScrollToElement)
  }, [history])

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path='/' component={Home} />
      <Route exact path='/project-1' component={Project1} />
      <Route exact path='/project-2' component={Project2} />
      <Route exact path='/project-3' component={Project3} />
      <Route exact path='/project-4' component={Project4} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;