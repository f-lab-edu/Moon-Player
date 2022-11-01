import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index.jsx';
import UserPage from 'pages/User/UserPage';
import LoginPage from 'pages/Login/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>;<Route path="/music" element={<MusicPage />}></Route>;
      {/* <Route path="/user" element={<UserPage />}></Route>; */}
    </Routes>
  );
}

export default App;
