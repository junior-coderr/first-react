import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Entry from './Entry.jsx'
import Login from './Login.jsx'
import Signup from './signup.jsx';
import Home from './Home.jsx';
import Popup from './Popup.jsx';



import './index.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from "react-router-dom";
let path ='/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path={path} element={<div className='bb'><Header /><Entry /><Popup /></div>}/>
      <Route path='/login' element={<div className='bb'><Header /><Login name='p'/><Popup /></div>}/>
      <Route path='/signup' element={<div className='bb'><Header /><Signup /><Popup /></div>}/>
      <Route path='/home' element={<div className='bb'><Header /><Home /><Popup /></div>}/>
    </Routes>
  </Router>
  )
  


