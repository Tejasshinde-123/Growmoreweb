import { useState } from 'react'
import './App.css'
import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import  Mainpage  from './components/Mainpage'
import  Contact  from './components/Contact'
import Javafullstack from './components/Javafullstack';
import Pythons from './components/Pythons'
import Mern from './components/Mern'
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Circle from './components/Circle';
import Try from './components/Try'





function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/Header' element={<Header/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Javafullstack' element={<Javafullstack/>}/>
     <Route path='/Pythons' element={<Pythons/>}/>
     <Route path='/Mern' element={<Mern/>}/>
     <Route path='/Portfolio' element={<Portfolio/>}/>
     <Route path='/Circle' element={<Circle/>}/>
     <Route path='/Try' element={<Try/>}/>
     <Route path='/' element={<Mainpage/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
