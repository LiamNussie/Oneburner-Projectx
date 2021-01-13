import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import css from './contact.css'



const Contact = () => {
    
        return (
            <div className="contact">

                    <div className="grid">
                            <div className="main-form">
                            <form action="" className="form">
                                <div className="container">
                                    <div className="grid-layout">
                                        <div className="make">
                                            <label htmlFor="name">Last Name</label>
                                            <input type="text" id="name" className="lname" />
                                        </div>

                                        <div className="take">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" id="name" className="fname" />
                                        </div>
                                    </div>

                                    <div className="email">
                                        <label htmlFor="email">Work Email</label>
                                        <input type="email" id="name" className="email" />
                                    </div> 
                                    
                                    <div className="number">
                                        <label htmlFor="number">Phone Number</label>
                                        <input type="tel" id="number" className="number" />
                                    </div>

                                    <div className="interest">
                                        <label htmlFor="sort">Product of interest</label>
                                        <select>
                                            <option>Select an option</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    <div className="gridy">
                                        <div className="mainy">
                                            <label htmlFor="name">Company Name</label>
                                            <input type="text" id="name" className="lname" />
                                        </div>

                                        <div className="asidey">
                                            <label htmlFor="name" placeholder="select an option">Company Size</label>
                                            <select name="cars" id="cars">
                                                <option type="text" value="volvo">1</option>
                                                <option value="saab">2</option>
                                                <option value="mercedes">3</option>
                                                <option value="audi">4</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="text-area">
                                        <label htmlFor="note">How can our experts help you?</label>
                                        <input type="password" id="note" className="fname" />
                                    </div>

                                    <button type="submit">Contact Us</button>
                                </div>
                            
                            </form>
                            </div>

                            <div className="asidely">
                                <div className="contact">
                                    <h1 className="header">Request a call from an expert</h1>
                                    <p className="header">Having thoughts on which product works best htmlFor you? Fill the form and our expert will reach out to you.</p>
                                </div>

                                <div className="address">
                                    <h2 className="header">Our Offices around Africa</h2>
                                </div>
                                <div className="grid-form">
                                    <div className="beal">
                                        <div className="same">
                                            <h6 className="list-head">Nigeria</h6>
                                            <ul>
                                                <li className="lice">33a, Adeola Odeku, Victoria</li>
                                                <li className="lice">Island, Lagos</li>
                                                <li className="lice">(0)-8000000000</li>
                                            </ul>
                                        </div>

                                        <div className="same">
                                            <h6 className="list-head">Egypt</h6>
                                            <ul>
                                                <li className="lice">72, Gameat El-Dewal</li>
                                                <li className="lice">El-Arabia St., Giza.</li>
                                                <li className="lice">+20-(0)-35924295</li>
                                            </ul>
                                        </div>

                                        <div className="same">
                                            <h6 className="list-head">Mali</h6>
                                            <ul>
                                                <li className="lice">22, Badalabougou Est.,</li>
                                                <li className="lice">Bamako.</li>
                                                <li className="lice">+223-(0)-78175387</li>
                                            </ul>
                                        </div> 
                                    </div>

                                    <div className="feal">
                                        <div className="same">
                                            <h6 className="list-head">Ghana</h6>
                                            <ul>
                                                <li className="lice">45, El-Senoussi Street,</li>
                                                <li className="lice">Accra</li>
                                                <li className="lice">+233-(0)-277619819</li>
                                            </ul>
                                        </div>
                        
                                        <div className="same">
                                            <h6 className="list-head">Kenya</h6>
                                            <ul>
                                                <li className="lice">41, Enterprise Rd., Industrial</li>
                                                <li className="lice">Area , Niarobi</li>
                                                <li className="lice">+254-(0)-20536766</li>
                                            </ul>
                                        </div>

                                        <div className="same">
                                            <h6 className="list-head">Tanzania</h6>
                                            <ul>
                                                <li className="lice">Mbezi Beach, P.O.B: 70339</li>
                                                <li className="lice">Dar Salaam</li>
                                                <li className="lice">+255-(0)-222120119</li>
                                            </ul>
                                        </div>  
                                    </div>

                                    <div className="meal">
                                        <div className="same">
                                            <h6 className="list-head">South Africa</h6>
                                            <ul>
                                                <li className="lice">474, Cheriton Drive, Port</li>
                                                <li className="lice">Shepstone, Kwazulu-Natal</li>
                                                <li className="lice">+27-(0)-857926978 </li>
                                            </ul>
                                        </div>

                                        <div className="same">
                                            <h6 className="list-head">Tunisia</h6>
                                            <ul>
                                                <li className="lice">13, Rue de Makthar, Dhraa</li>
                                                <li className="lice">Governorate Kasserine</li>
                                                <li className="lice">+216-(0)-77367410</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="same">
                                            <h6 className="list-head">Togo</h6>
                                            <ul>
                                                <li className="lice">10, E rue des Echis</li>
                                                <li className="lice">Lome</li>
                                                <li className="lice">+228-(0)-22229600</li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                                
                            </div>

                        </div>

                        
            </div>
        )
   
};


export default Contact