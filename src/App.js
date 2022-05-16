import './App.scss';
import React from 'react'

import Header from './component/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/////////////////////////////////////////////
//pages
import History from '../src/component/history/history.js';
import Help from './component/help/help.js';
import Home from '../src/component/home/home.js';
import Footer from '../src/component/footer/footer.js';


class App extends React.Component {
  render() {
    
  return (
   <>
 <BrowserRouter>
        <Header />
        <Routes>
         
        <Route path="/" element={<Home />} />

          <Route path="/history" element={<History />} />
        <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
     <Footer />
   </>
  );}
}

export default App;
