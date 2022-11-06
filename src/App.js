import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User'

import AllUsers from './AllUsers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='/users/:id' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
