import React,{Component} from 'react';
import './nav.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
      return(
         <div className="d1 row">
           <div className="nav1 col">
            <nav className="navbar navbar-expand-lg navbar-lg bg-dark">
               <div className="navbar-nav">
               <Link class="lik1 ml2 black" to="/">Home</Link>
               </div>
               <div className="navbar-nav">
               <Link class="lik2 ml4 black" to="/top">Top</Link>
               </div> 
               <div className="navbar-nav">
               <Link class="lik3 ml4 black" to="/Shoes">Footwear</Link> 
               </div>
               <div className="navbar-nav">
               <Link class="lik4 ml4 black" to="/watch">Watch</Link>
               </div>
               <div class="nav3">
               <div className="navbar-nav">
                 <span class="glyphicon glyphicon-shopping-cart" style={{marginLeft:"440px"}} role="img"></span>
               </div>
               <div className="navbar-nav">
                  <span class="glyphicon glyphicon-user ml3" role="img"></span>
               </div>
               <div className="navbar-nav">
                 <button class="btn btn-danger ml3 shadow" style={{fontSize:"1.5rem"}}><Link class="lik6 black pa0" to="/login">Login</Link></button>
               </div>
               <div className="navbar-nav">
                 <button class="btn btn-danger ml3 shadow" style={{fontSize:"1.5rem"}}><Link class="lik6 black pa0" to="/signup">Signup</Link></button>
               </div>
               <div className="navbar-nav">
                 <button class="btn btn-danger ml3 shadow" style={{fontSize:"1.5rem"}}><Link class="lik7 black pa0" to="">Shop Now</Link></button>
               </div>
               </div>
            </nav>
           </div>
         </div>
)
}
}
export default Navbar;