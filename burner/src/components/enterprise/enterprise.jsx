import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import css from './enterprise.css';
import Curve from './Vector 1.svg';
import Boy from './Group 32.png';
import Girl from './Group 34.png';
import sponsors from './Component 7.png';
import check from './Group.png';
import award from './award.png';
import logos from './integration tools.png';
import map from './africa.png';
import kemi from './kemi.png';


const Enterprise = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    
        return (
            <div className="enterprise">
                <div className="first" data-aos="fade-up">
                    <div className="main">
                        <h1>Modern solution built for your enterprise growth</h1>
                        <p>Centralize your team in a secure, flexible and managed platform</p>
                        <div id="demo">Request a demo ></div>
                        
                    </div>
                    <img src={Curve} alt="curve" id="curve"/>
                    <img src={Boy} alt="boy" id="boy"/>
                    <img src={Girl} alt="girl" id="girlx"/>
                </div>
                

                <div className="second" data-aos="fade-up">
                    <div className="section2">
                        <p>Over 500+ companies bond teams together with Oneburner</p>
                        <div className="logos">
                        <img src={sponsors} alt="sponsors" />
                        
                        </div>
                    </div>
                </div>

                <div className="third" data-aos="fade-up">
                    <h2>How Oneburner help enterprises grow</h2>
                    <div className="flex-cont">
                        <div className="left">
                            <p>Oneburner software solution helps your business by creating an enabling environment for easy communication and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime SLA and Data security</p>
                        </div>
                        <div className="right">
                            <div className="temp">
                                <img src={check} alt="check" />
                                <p>Data protection and control</p>
                            </div>
                            <div className="temp">
                                <img src={check} alt="check" />
                                <p>Reporting and analytics</p>
                            </div>
                            <div className="temp">
                                <img src={check} alt="check" />
                                <p>Use single sign-on and multi-factor authentication to secure accounts</p>
                            </div>
                            <div className="temp">
                                <img src={check} alt="check" />
                                <p>Enterprise integration with other tools</p>
                            </div>
                        </div>

                    </div>
                </div>

                            <div className="award" data-aos="fade-up">
                                <img src={award} alt="award" />
                                <div className="text">
                                    <h3>Best Collaboration Software</h3>
                                    <p>Africa tech coalition award 2020</p>
                                </div>
                                
                            </div>

                
                <div className="fourth" data-aos="fade-up">
                    <img src={logos} alt="logos" />
                </div>


                <div className="fifth-wrapper" data-aos="fade-up">
                    <div className="fifth">
                        <div className="text">
                            <h3>Our Regional Presence</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        </div>
                        <img src={map} alt="afica-map" />
                    </div>
                </div>

                <div className="sixth" data-aos="fade-up">
                    <p>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.</p>
                    <div id="line"></div>
                    <div className="flexbag">
                        <div className="person">
                            
                            <div id="ceo">
                                <img src={kemi} alt="ceo" />
                            </div>
                            <div className="name">
                                <h5>Kemi Hassan</h5>
                                <h5>CEO, Saharaa Inc.</h5>
                            </div>
                        
                        </div>
                    </div>
                </div>
                

                <div className="seventh" data-aos="fade-up">
                    <div className="content">
                        <h2>Want to learn more on how we can impact your enterprise?</h2>
                        <div id="cs">Contact Sales ></div>
                    </div>
                </div>
            </div>
        )
   
}

export default Enterprise;