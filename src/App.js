import React, { Component } from 'react';


import './App.css';
import { Header } from './components/header';
import {NewsBody} from './components/newsBody';
import {InterestingTopic} from './components/interestingTopic';
import {Region} from './components/region';
import {Countries} from './components/countries';
import {NewsChannel} from './components/newsChannel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container-fluid'>
          <div className='row'>

            <div className='col-lg-12'>
            <Header/>
            </div>


           

            <div className='leftMenu' className='col-lg-3 navbar-fixed-top'>
            <br/>
            <br/>
            <br/>
            <br/>
            <InterestingTopic/>
            <NewsChannel/>
            <Region/>
            <Countries/>
            </div>
            
            <div className='col-lg-9 col-lg-offset-3'>
            <NewsBody/>
            </div>  

            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
