import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthScreen from './pages/AuthScreen/AuthScreen';
import Home from './pages/Home/Home';
import User from './pages/User/User';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entrar" component={AuthScreen} />
        <Route path="/usuario/:userId" component={User} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;