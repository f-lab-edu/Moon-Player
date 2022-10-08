import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/Login/LoginPage';
import MusicPage from 'pages/Music/MusicPage';
import UserPage from 'pages/User/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>;
      <Route path="/music" element={<MusicPage />}></Route>;
      <Route path="/user" element={<UserPage />}></Route>;
    </Routes >
  );
}

export default App;
