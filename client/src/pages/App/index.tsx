import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import LoginPage from 'pages/Login/index';

import GlobalStyle from 'styles/GlobalStyle';
import AlarmDialog from 'components/Global/UI/Dialog/Alarm/AlarmDialog';
import { DiaLogContextProvider } from 'context/Dialog';
import MusicDialog from 'components/Global/UI/Dialog/Music/MusicDialog';
import ConfirmDialog from 'components/Global/UI/Dialog/Confirm/ConfirmDialog';
import ProtectedRoute from 'Route/ProtectedRoute';

// DiaLogContext Provider 내용 합치기 지저분하다.
function App() {
  return (
    <DiaLogContextProvider>
      <GlobalStyle />
      <AlarmDialog />
      <MusicDialog />
      <ConfirmDialog />
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
    </DiaLogContextProvider>
  );
}

export default App;
