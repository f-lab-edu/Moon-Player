import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from './pages/User/index';
import LoginPage from 'pages/Login/index';
import ProtectedRoute from 'route/ProtectedRoute';
import Alarm from 'components/Global/Alarm';
import useAlarm from 'hooks/useAlarm';
import GlobalStyle from 'styles/GlobalStyle';
function App() {
  const { isOpen, text, handleClose } = useAlarm();

  return (
    <>
      <GlobalStyle />
      {isOpen ? <Alarm text={text} onClose={handleClose} /> : <></>}
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
    </>
  );
}

export default App;
