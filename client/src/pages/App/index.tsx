import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import LoginPage from 'pages/Login/index';
import ProtectedRoute from 'components/Route/ProtectedRoute';
import GlobalStyle from 'styles/GlobalStyle';
import { Alarm } from 'components/Global/UI/Dialog/Alarm/AlarmDialog';
import { AlarmContextProvider } from 'provider/Alarm';
function App() {
  return (
    <AlarmContextProvider>
      <Alarm />
      <GlobalStyle />
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
    </AlarmContextProvider>
  );
}

export default App;
