import React, { Component } from 'react';
import css from './sign-up.css';
import logo from './logo.png';
import linkedin from './linkedin.png';
import google from './google.png';
import outlook from './outlook.png';


class Signup extends Component {
    render() {
        return (
            <div className="signup">

                    <div className="container">
                            <div className="sign-up">
                                <h1 className="sign text">Sign In</h1>
                                <p className="para text">Welcome back!</p>
                            </div>

                            <div className="email">
                                <label htmlFor="email">Email / Username</label>
                                <input type="email" id="name" className="email" />
                            </div> 
                            
                            <div className="number">
                                <label htmlFor="password">Password</label>
                                <input type="text" id="password" className="password" />
                            </div>

                            <button type="submit">Log In</button>
                            <p className="para text forget">forgot password?</p>
                            
                            <div className="links">
                                <p className="para">Or sign in with:</p>
                                <img src={outlook} alt="outlook" className="outlook" />
                                <img src={linkedin} alt="linkedin" className="outlook" />
                                <img src={google} alt="google" className="outlook" />
                            </div>
                            
                    </div>
            </div>
            
        )
    }
}

export default Signup
