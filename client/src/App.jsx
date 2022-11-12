import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from './pages/User/index';
import LoginPage from 'pages/Login/index';
import ProtectedRoute from 'route/ProtectedRoute';
import Alarm from 'components/Common/Alarm';
import useAlarm from 'hooks/useAlarm';
import GlobalStyle from 'style/GlobalStyle';

function App() {
  const { isOpen, text } = useAlarm();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isOpen ? <Alarm text={text} /> : <></>}
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <MusicPage />
            </ProtectedRoute>
          }
          path="/music"
        ></Route>
        <Route
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
          path="/user"
        ></Route>
        <Route element={<LoginPage />} path="/"></Route>;
      </Routes>
    </ThemeProvider>
  );
}

export default App;
