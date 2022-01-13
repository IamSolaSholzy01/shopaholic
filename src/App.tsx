import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element="{<Home />}" />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
