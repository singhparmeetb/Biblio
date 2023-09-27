import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import 'Routes' and 'Navigate'
import MainPage from './components/MainPage';
import Search from './components/Search';
import Signup from './components/SignUp';
import TopBar from './components/TopBar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
