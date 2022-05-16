import './App.scss';
import React from 'react'
import History from '../src/component/history/history.js';
import Help from './component/help/help.js';
import Home from '../src/component/home/home.js';
import Footer from '../src/component/footer/footer.js';
import Header from './component/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useReducer} from 'react';
import historyReducer ,{ addAction } from './Reducer.js';

const initialState = {
  history: [],
}
/////////////////////////////////////////////
//pages



function  App(props)  {
  
  
    const [state, dispatch] = useReducer(historyReducer, initialState);
    const addHistory = (action) => {
      dispatch(addAction(action));
    }
  return (
   <>
 <BrowserRouter>
        <Header />
        <Routes>
         
        <Route path="/"  element={<Home addHistory={addHistory} />} />

          <Route path="/history" element={<History history = {state}/>}  />
        <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
     <Footer />
   </>
  );}


export default App;
