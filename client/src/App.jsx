import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import LoginPage from 'pages/Login/index';
import UserPage from 'pages/User/index';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import UserReportPage from 'pages/User/components/Report';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>;<Route path="/music" element={<MusicPage />}></Route>;
        <Route path="/user" element={<UserPage />}></Route>;
        <Route path="/user/report" element={<UserReportPage />}></Route>;
      </Routes>
    </ThemeProvider>
  );
}

export default App;
