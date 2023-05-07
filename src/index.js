import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutersTest from './ComponentTests/RoutersTest.tsx';
import NavBar from './components/NavBar.tsx';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home.tsx';
import About from './screens/About.tsx';
import TermsAndConditions from './screens/TermsAndConditions.tsx';
import UsersScreen from './screens/UsersScreen.tsx';
import UserScreen from './screens/UserScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/users' element={<UsersScreen/>} />
        <Route path='/users/:id' element={<UserScreen/>} />
        <Route path='/about/:id' element={<About/>} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
      </Routes>
    </Router>
    {/* <NavBar/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
