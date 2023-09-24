import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import 'Routes' and 'Navigate'
import MainPage from './components/MainPage';
import Search from './components/Search';
import Signup from './components/SignUp';
import TopBar from './components/TopBar';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here.
    // For simplicity, we'll assume successful login for any credentials.
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
