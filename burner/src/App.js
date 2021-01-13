import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Landing from './components/landing-page/landing-page';
import Enterprise from './components/enterprise/enterprise';
import Signup from './components/sign-up/sign-up';
import Contact from './components/contact/contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/enterprise" component={Enterprise} />
              <Route path="/contact" component={Contact} />
              <Route path="/sign-up" component={Signup} />
            </Switch>
            <Footer />
          </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
