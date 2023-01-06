import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import LoginPage from 'pages/Login/index';
import ProtectedRoute from 'components/Route/ProtectedRoute';
import Alarm from 'components/Global/UI/Alarm/Alarm';
import GlobalStyle from 'styles/GlobalStyle';
import CustomPlayList from 'components/Music/Player/CustomPlayList/Root';
function App() {
  return (
    <>
      <CustomPlayList />
      <GlobalStyle />
      <Alarm></Alarm>
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
