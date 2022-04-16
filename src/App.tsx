import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Menu from './Peliculas/utils/Menu';
import routes from './route-config';


function App() {

  return(
    <BrowserRouter>
      <div>
        <Menu/>
          <div  className='container'>
            <Switch>
              {routes.map(ruta => 
                <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
                  <ruta.componente/>
                </Route> 
              )}
            </Switch>
          </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
