import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import css from './footer.css'
import logo from './logo.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import youtube from './youtube.png';
import twitter from './twitter.png';


const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    
        return (
            <div className="footer" data-aos="fade-up">
                    <footer data-aos="fade-up">
                            <div className="head">
                                <div><img src={logo} alt="logo" /></div>
                                <div>
                                    <select id="sort">
                                        <option>Select an option</option>
                                    </select>
                                </div>
                            </div>
                            <div className="dark-grid">
                                <div className="logo-text">
                                    <p className="same-text1">No 1 CRM solution in Africa</p>
                                    <div className="blue"><span className="red">Terms Of Use</span> <span className="red"> |</span> <span className="red"> Policy</span></div>
                                    <div className="reach">
                                        <p className="same-text3">Get in touch</p>
                                        <p className="same-text4">+234-80-000-0000</p>
                                        <img href="#" src={facebook} alt="fb" className="outlook" />
                                        <img href="#" src={twitter} alt="tw" className="outlook" />
                                        <img href="#" src={linkedin} alt="ln" className="outlook" />
                                        <img href="#" src={youtube} alt="yt" className="outlook"/>
                                    </div>
                                    
                                </div>
                                <div className="same marketing">
                                    <h6 className="list-head">Product</h6>
                                    <ul>
                                        <a><li className="lice">Feature</li></a>
                                        <a><li className="lice">Enterprise</li></a>
                                        <a><li className="lice">Security</li></a>
                                        <a><li className="lice">Trust</li></a>
                                        <a><li className="lice">Customer</li></a>
                                        <a><li className="lice">Pricing</li></a>
                                        <a><li className="lice">Integration</li></a>
                                        <a><li className="lice">Oneburner Partners</li></a>
                                        
                                    </ul>
                                </div>
                                <div className="same company">
                                    <h6 className="list-head">Company</h6>
                                    <ul>
                                        <a className="alink"><li className="lice">About Us</li></a>
                                        <a><li className="lice">Contact Us</li></a>
                                        <a><li className="lice">Careers</li></a>
                                        <a><li className="lice">In the News</li></a>
                                    </ul>
                                </div>
                                <div className="same support">
                                    <h6 className="list-head">Oneburner For the team</h6>
                                    <ul>
                                        <a><li className="lice">Engineering</li></a>
                                        <a><li className="lice">Financial Services</li></a>
                                        <a><li className="lice">CRM and Sales</li></a>
                                        <a><li className="lice">IT</li></a>
                                        <a><li className="lice">Customer support</li></a>
                                        <a><li className="lice">Human Resources</li></a>
                                        <a><li className="lice">Ptpject Management</li></a>
                                        <a><li className="lice">Remote Work</li></a>
                                    </ul>
                                </div>
                                <div className="same subscribe">
                                    <h6 className="list-head">Resources</h6>
                                    <ul>
                                        <a><li className="lice">Community</li></a>
                                        <a><li className="lice">Guides</li></a>
                                        <a><li className="lice">Templates</li></a>
                                        <a><li className="lice">Video Tutorial</li></a>
                                        <a><li className="lice">Prpfessional Services</li></a>
                                        <a><li className="lice">Blog</li></a>
                                        <a><li className="lice">Webinars</li></a>
                                        <a><li className="lice">Find a partner</li></a>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="line"></div>
                        </footer>
                        
                        <p className="list-header">© 2020 Oneburner.com. All Rights Reserved. </p>
            </div>
        )
  
}


export default Footer;

