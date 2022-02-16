import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import StudentLogin from './StudentLogin';
import AdminLogin from './AdminLogin';
import Admission from './Admission';

import Navigation from './navigation';

const App =()=>{
  return (
     <div>
       <BrowserRouter>
         <div>
          <Navigation/>
           <Switch>
             <Route path ='/' exact component= {Home} />
             <Route path ="/aboutus" exact component= {About} />
             <Route path ="/contactus" exact component= {ContactUs} />
             <Route path ="/studentlogin" exact component= {StudentLogin} />
             <Route path ="/adminlogin" exact component= {AdminLogin} />
             <Route path ="/admission" exact component= {Admission} />
           </Switch>
         </div>
       </BrowserRouter>
     </div>
    
  );
}

export default App;
