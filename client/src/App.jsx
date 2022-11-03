import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import LoginPage from 'pages/Login/index';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>;<Route path="/music" element={<MusicPage />}></Route>;
        <Route path="/user" element={<UserPage />}></Route>;
      </Routes>
    </ThemeProvider>
  );
}

export default App;
