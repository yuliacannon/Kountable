import React, { Component } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'

class SignUp extends Component{
    state = {
        email: '',
        password: ''
    };

    handleChange =(e) =>{
        this.setState({ [e.target.name] : e.target.value });
       }

    validateForm =()=>{
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0
          );
    }

    render(){
        return(
            <div className='main-wrapper'>
                <form className='registration-form'>
                    <h1>Create an account</h1>

                    <label for="email">Email address
                        <input type="text" value={this.state.email} onChange={this.handleChange} placeholder='Enter email' name="email" required/>
                    </label>

                    <label for="psw">Create a password
                        <input type="password" value={this.state.password} onChange={this.handleChange} placeholder='******' name="psw" required/>
                        
                    </label>

                    <div className='btn-submit'><input type="submit" value="Sign up" disabled={!this.validateForm()}/></div>
                </form>
                <p>Already have a Kountable account? <Link to='/login'>Log in</Link></p>
            </div>
        );
    }
}

export default SignUp;