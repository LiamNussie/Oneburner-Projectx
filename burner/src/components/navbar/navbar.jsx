import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from './Logo_whitebackground 1.png';
import css from './navbar.css';

class Navbar extends Component {
  state = {
    isClassOn: false,
    isDisplay: false
}


    render() {
      return (
        <div className="Navbar">
            <nav>
                <div className="name-logo">
                  <Link to='/'><img src={Logo} alt="name-logo" /></Link>
                    <ul className="left-links">
                        <li>Product</li>
                        <li>Pricing</li>
                        <li><Link to='/enterprise' style={{ textDecoration: 'none', color: '#454545' }}>Enterprise</Link></li>
                        <li>Support</li>
                    </ul>
                </div>

                
                <ul className="nav-links">
                        <li><Link to='/contact' style={{ textDecoration: 'none', color: '#454545' }}>Contact Sales</Link></li>
                        <li><Link to='/sign-up' style={{ textDecoration: 'none', color: '#454545' }}>Login</Link></li>
                        <li id="try">Try For Free > </li>
                </ul>


                <div id ="menu" className={ this.state.isClassOn ? "change" : "noChange"} onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>
                      <p id="bar1"></p>
                      <p id="bar2"></p>
                      <p id="bar3"></p>
                </div>


            </nav>

            

            <div id="navmenu" className={ this.state.isDisplay ? "showNav" : "hideNav"}>
                    <ul className="nav-linksx">
                        <li>Product</li>
                        <li>Prices</li>
                        <li><NavLink to="/store" style={{ textDecoration: 'none', color: '#ffffff' }} onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Enterprise</NavLink></li>
                        <li>Support</li>
                        <li><NavLink to="./contact" style={{ textDecoration: 'none', color: '#ffffff' }} onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Contact Sales</NavLink></li>
                        <li><NavLink to="./contact" style={{ textDecoration: 'none', color: '#ffffff' }} onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Login</NavLink></li>
                        <li>Try for Free</li>
                    </ul>
            </div>

        </div>
      );
    }
    
  }

export default Navbar;    