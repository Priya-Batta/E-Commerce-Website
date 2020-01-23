import React,{Component} from 'react';
import './Components/ss.css';
import 'tachyons';
// import Navbar from './component/navbar.jsx';
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Top from './Components/top';
import Shoes from './Components/shoes';
import Home from './Components/home';
import Signup from './Components/signup';
import TT from './Components/tt';
import DD from './Components/dd';
import Watch from './Components/watch';

import Login from './Components/login';

class App extends Component{
    constructor()
    {
        super();
        this.f1=this.f1.bind(this);
        this.state={
            info:[]
                }
    }
    f1(val)
    {
     this.setState({info:val});
    }
    render(){
        return (
         <BrowserRouter>
             <Route path="/" exact render={()=>{
        return(
            <div class="div1">
             <Home/>
            </div>
        )
             }}/>
             <Route path="/home" exact render={()=>{
                 return(<Home/>)
             }}/>
              <Route path="/top" exact render={()=>{
                 return(<Top onfun={this.f1}/>)
             }}/>
             <Route path="/Shoes" exact render={()=>{
                 return(<Shoes onfun={this.f1}/>)
             }}/>
              <Route path="/signup" exact render={()=>{
                 return(<Signup/>)
             }}/>
             <Route path="/tt" exact render={()=>{
                 return(<TT info1={this.state.info}/>)
             }}/>
             <Route path="/watch" exact render={()=>{
                 return(<Watch onfun={this.f1}/>)
             }}/>
             <Route path="/dd" exact render={()=>{
                 return(<DD/>)
             }}/>
             <Route path="/login" exact render={()=>{
                 return(<Login/>)
             }}/>
            </BrowserRouter>
            )
    }
}
//{`https://joeschmoe.io/api/v1/vinod`}
export default App;