import React, { Component } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'


class LogIn extends Component{
    state = {value: ''};

    render(){
        return(
            <div className='main-wrapper'>
                <form className='registration-form'>
                    <h1>Log in to your account account</h1>

                    <label for="email">Email address
                        <input type="text" value={this.state.value} value='Enter email' name="email" required/>
                    </label>

                    <label for="psw">Password
                        <input type="password" value='******' name="psw" required/>
                    </label>
                    


                    <div className='btn-submit'><input type="submit" value="Log in" /></div>
                </form>
                <p>Don't have an account yet? <Link to='/signup'>Sign up</Link></p>
            </div>
        );
    }
}

export default LogIn;