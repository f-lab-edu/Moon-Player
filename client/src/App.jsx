import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import LoginPage from 'pages/Login/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>;<Route path="/music" element={<MusicPage />}></Route>;
      <Route path="/user" element={<UserPage />}></Route>;
    </Routes>
  );
}

export default App;
