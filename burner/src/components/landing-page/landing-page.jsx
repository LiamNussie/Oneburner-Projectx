import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import css from './landing-page.css';
import person1 from './person1.png';
import person2 from './person2.png';
import person3 from './person3.png';
import elipse from './Ellipse 6.svg';
import landing1 from './landing-image.png';
import sponsors from './Component 7.png';
import video from './Rectangle 26.png';
import frame from './Frame 2 1.png';
import frame2 from './Rectangle 22.png';
import int from './integration tools.png';
import report from './Rectangle 21.png';
import chart from './Rectangle 19.png';
import girl from './Ellipse 1.png';
import chat from './Vector.png';
import mail from './Vector2.png';
import phone from './Vector3.png';
import logox from './logox.png';
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';


const Landing = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  
    
      return (
        <div className="landing">


        
        <div className="anim">
              <div className="left-side">
                  <h2>Collaborate with your team and get more done</h2>
                  <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
                  <div id="try2">Start Free Trial  ></div>
                </div>
                
              <div className="right-side">
                    <img src={landing1} alt="landing1" />
              </div>

          </div>
          

            <div className="section2">
                <p>Over 500+ companies bond teams together with Oneburner</p>
                <div className="logos">
                  <img src={sponsors} alt="sponsors" />
                  
                </div>
            </div>

            <div className="section3" data-aos="fade-up">
                <div className="tab">
                    <p id="crm">CRM & Sales</p>
                    <p>Human Resources</p>
                    <p>Marketing</p>
                    <p>Remote Work</p>
                    <p>Project Management</p>
                    <p>Social Media</p>
                </div>

                <div className="flex3">
                  <div  className="flex3-text">
                      <h4>Manage team activities all in one place</h4>
                      <p>Keep your team organized and informed with activities that are up to date.</p>
                  </div>
                  <div className="flex3-img">
                      <img src={video} alt="video"></img>
                  </div>
                </div>
            </div>

            
            
                <div className="flex4"  data-aos="fade-up">
                  <div className="flex4-img">
                      <img src={frame} alt="frame"></img>
                  </div>

                  <div  className="flex4-text">
                      <h4>Bring your team up to speed</h4>
                      <p>Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
                  </div>
                </div>

                
                  <div className="flex5" data-aos="fade-up">
                    <div  className="flex5-text">
                        <h4>Automated task timeline</h4>
                        <p>View dates, projects, calendar, sprint and more with reliability.</p>
                    </div>

                    <div className="flex5-img">
                        <img src={frame2} alt="frame2"></img>
                    </div>
                  </div>
                
                <div className="section6"  data-aos="fade-up">
                  <img src={int} alt="int tools" />
                </div>

                <div className="section7"  data-aos="fade-up">
                  <div className="flex7">
                    <div className="flex7-img">
                        <img src={report} alt="report" />
                    </div>

                    <div  className="flex7-text">
                        <h4>Timeless report generator</h4>
                        <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
                    </div>
                  </div>
                </div>

                <div className="section8"  data-aos="fade-up">
                  <div className="flex8">
                    <div  className="flex8-text">
                        <h4>Efficient lead management</h4>
                        <p>Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.</p>
                    </div>

                    <div className="flex8-img">
                        <img src={report} alt="report" />
                    </div>
                  </div>
                </div>

                <div className="section9"  data-aos="fade-up">
                  <div className="left">
                    <div className="icons">
                        <img src={chat} alt="chat" />
                        <p>Live chat</p>
                        <img src={mail} alt="mail" />
                        <p>Mail support</p>
                        <img src={phone} alt="phone" />
                        <p>Phone call support</p>
                    </div>
                    <img src={girl} alt="girl" id="girl" />
                  </div>

                  <div className="right">
                      <h4>24/7 customer support</h4>
                      <p>Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
                  </div>
                </div>

                <div className="section10" data-aos="fade-up">
                  <h2>Choose a better way to work</h2>
                  <p>No credit card details | No additional installation | No time wasting</p>
                  <div id="start">Start my free trial  ></div>
                </div>

                
          </div>
        
      );
 
    
  }

export default Landing;    