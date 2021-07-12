import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Card from './Components/Card';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SingleImage from './Components/singleImage';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/profile/:key' component={Profile} />
            <Route exact path='/:id' component={SingleImage} />
            <Route path='/card/:user' component={Card} />

          </Switch>
          
        </div>
        
      </BrowserRouter>

    )
  }
}
export default App;
