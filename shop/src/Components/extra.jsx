import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './nav.css'
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

class Login extends Component{


    constructor(props){
        super(props);
        this.state={
            fname: '',
            Lemail: '',
            Semail: '',
            loginPassword: '',
            signupPassword: ''
        };
    }

    handleSignup = () => {
        $("#main").animate({left:"22.5%"},450);
        $("#main").animate({left:"30%"},500);
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},450);
    
        $("#signupform").animate({left:"17%"},450);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");
    }

    handleLogin = () => {
    $("#main").animate({left:"77.5%"},450);
    $("#main").animate({left:"70%"},500);
    $("#signupform").css("visibility","hidden");
    $("#signupform").animate({left:"75%"},450);

    $("#loginform").animate({left:"83%"},450);
    $("#loginform").animate({left:"70%"},500);
    $("#loginform").css("visibility","visible");
    }

    handleChange=(e)=>
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin2=(e)=>{
        e.preventDefault();
        console.log(this.state.Lemail + " " + this.state.loginPassword);
        axios.post(`http://localhost:5000/auth/login`, {
            email:this.state.Lemail,
            password:this.state.loginPassword
        })
            .then(res => {
                console.log(res.data.token);
            })
            .catch(err => console.log(err));
    }

    handleSignup2=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/auth/register`, {
            name:this.state.fname,
            email:this.state.Semail,
            password:this.state.signupPassword
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    render(){
        return (
         <React.Fragment>
           <div className="backgroundimg5">
             <Navbar/>
             <div className="container mt6" style={{align:"center"}}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="text" ref="name" className="form-control" style={{fontSize:"1.5rem"}} placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="password" className="form-control" style={{fontSize:"1.5rem"}} placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block shadow col-md-12" style={{fontSize:"1.5rem"}}><Link class="lik1 black" to="">Signup</Link></button>
                </form>
            </div>
          </div>
        </React.Fragment>
        )
    }
}
export default Login; 