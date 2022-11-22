import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from './pages/User/index';
import LoginPage from 'pages/Login/index';
import ProtectedRoute from 'route/ProtectedRoute';
import Alarm from 'components/Common/App/Alarm';
import useAlarm from 'hooks/useAlarm';
import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ResolutionContextProvider from 'context/ResolutionContext';

function App() {
  const { isOpen, text } = useAlarm();
  return (
    <ResolutionContextProvider>
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
    </ResolutionContextProvider>
  );
}

export default App;
