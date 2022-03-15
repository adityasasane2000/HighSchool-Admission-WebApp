import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { setUser } from './redux/actions';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

import Navigation from './components/Navigation';

const App =()=>{
  return (
    <BrowserRouter>
      <div >
        <Navigation/>
        <div className='App'>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signup" component={Register} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
