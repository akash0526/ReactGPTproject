import React from 'react';
import {Article,Brand,CTA,Feature,Navbar} from './components';
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers';
import './App.css';
const App = () => {
  return (
    <div>
      <div className='App'>
         <div className='gradient__bg'>
          <Navbar/>
          <Header></Header>
        </div>

          <Brand></Brand>
          <WhatGPT3></WhatGPT3>
          <Features></Features>
          <Possibility></Possibility>
          <CTA></CTA>
          <Blog></Blog>
          <Footer></Footer>
      </div>      
    </div>
  );
};

export default App;
