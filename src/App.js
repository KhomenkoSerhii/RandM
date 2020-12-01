import { HashRouter, Route, Switch } from 'react-router-dom';

import Characters from './pages/Characters/'
import Episodes from './pages/Episodes/'
import Locations from './pages/Locations/'
import WatchList from './pages/WatchList/'

import './index.scss'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Characters} exact></Route>
        <Route path='/episodes' component={Episodes} ></Route>
        <Route path='/locations' component={Locations}></Route>
        <Route path='/my-watch-list' component={WatchList}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
