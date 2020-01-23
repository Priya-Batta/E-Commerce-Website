import React, { Component } from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../index.css'
import $ from 'jquery';
import axios from 'axios'

export default class Form extends Component{
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
        axios.post(`http://localhost:3009/person/login`, {
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
        axios.post(`http://localhost:3009/person/register`, {
            name:this.state.fname,
            email:this.state.Semail,
            password:this.state.signupPassword
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    

    render()
    {
        return(
            <div id="form-div">
            <div id="box">
                <div id="main">

                </div>
                <form id="loginform" onSubmit={this.handleLogin2}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" name="Lemail" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="password" placeholder="Password" name="loginPassword" value={this.props.value} onChange={this.handleChange} /><br />
                    <button type="submit" name="button">Login</button>
                </form>
                <form id="signupform"  onSubmit={this.handleSignup2}>
                    <h1>SIGN UP</h1>
                    <input type="text" placeholder="Full Name" name="fname" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="email" placeholder="Email" name="Semail" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="password" placeholder="Password" name="signupPassword" value={this.props.value} onChange={this.handleChange} /><br />
                    <button type="submit">SIGN UP</button>
                </form>

                <div id="login_msg">
                Have an account?
                </div>

                <div id="signup_msg">
                Create an account?
                </div>
                <div>
                    <button type="button" name="button" id="login_btn" onClick={this.handleLogin}>LOGIN</button>
                    <button type="button" name="button" id="signup_btn" onClick={this.handleSignup}>SIGN UP</button>
                </div>
            </div>
            </div>
        )
    }
}
