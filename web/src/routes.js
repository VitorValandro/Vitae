import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthScreen from './pages/AuthScreen/AuthScreen';
import Home from './pages/Home/Home';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entrar" component={AuthScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;