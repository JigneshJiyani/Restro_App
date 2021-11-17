
import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import About from './Restaurant_App/About';
import Brands from './Restaurant_App/Brands';
import Contact from './Restaurant_App/Contact';
import Home from './Restaurant_App/Home';
import Notfound from './Restaurant_App/Notfound';

var myStyle={
  fontFamily:'courier',
  color:'white',
  backgroundColor:'orange',
  fontSize:50
}

const routing = (
<Router>
<div>
<center>
  <h1 style={myStyle}><img src="Images/1.jpg" height="80"></img>  Welcome To Sankalp Group <img src="Images/3.jpg" height="80"></img></h1>
</center>
  
<ul class="NavMenu">  
  <li> <NavLink to="/" exact activeStyle={{color:'orange'}}>Home</NavLink> </li> 
  <li> <NavLink to="/about-us" exact activeStyle={{color:'orange'}}>About Us</NavLink> </li>
  <li> <NavLink to="/brands-of-sankalp" exact activeStyle={{color:'orange'}}>Brands Of Sankalp</NavLink> </li>
  <li> <NavLink to="/contact-us" exact activeStyle={{color:'orange'}}>Contact Us</NavLink> </li>  
</ul> 

<div>
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about-us" component={About} />
  <Route path="/brands-of-sankalp" component={Brands} />
  <Route path="/contact-us" component={Contact} />
  <Route component={Notfound} />

</Switch>

</div>
</div>
</Router>
  );



ReactDOM.render(routing,document.getElementById('root_spa_Tutorial'));