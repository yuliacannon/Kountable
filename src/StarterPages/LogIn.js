import React, { Component } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'
import eye from '../img/round-remove_red_eye-24px.svg'


class LogIn extends Component{
    state = {type: 'password',
    email: '',
    password: '',
    validateForm: false
    };

    handleChange =(e) =>{
        this.setState({ [e.target.name] : e.target.value });
       }

    showPassword = ()=>{
        this.setState({ type : this.state.type === 'password' ?'text': 'password' });
    }

    logIn = () =>{
        let users = JSON.parse(localStorage.getItem('users')) || [];

        let filteredUsers = users.filter(user => {
            return user.email === this.state.email && user.password === this.state.password;
        });

        if(filteredUsers.length){
            alert('You are logged in')
        }
    }

    render(){
        return(
            <div className='main-wrapper'>
                <form className='registration-form'>
                    <h1>Log in to your account</h1>

                    <label htmlFor="email">Email address
                        <input type="text"
                         onChange={this.handleChange}
                         value={this.state.email} 
                         placeholder='Enter email' 
                         name="email" 
                         required/>
                    </label>

                    <div className='password-input'>
                        <label htmlFor="password">Password
                            <input 
                            type={this.state.type} 
                            onChange={this.handleChange}
                            placeholder='******'
                            value={this.state.password} 
                            name="password" 
                            required/>
                            <img src={eye} onClick={this.showPassword} alt='hide' />
                        </label>
                    </div>
                    

                    <p className='forgot-pass'><a href='#'>Forgot password?</a></p>
                    <div className='btn-submit' id='login'>
                        <input 
                            type="submit" 
                            value="Log in"
                            onClick={this.logIn}
                             />
                    </div>
                </form>
                <p>Don't have an account yet? <Link to='/signup'>Sign up</Link></p>
            </div>
        );
    }
}

export default LogIn;