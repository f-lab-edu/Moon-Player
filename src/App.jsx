import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "pages/Login/LoginPage";
import MusicPage from "pages/Music/MusicPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>;
      <Route path="/music" element={<MusicPage />}></Route>;
    </Routes>
  );
}

export default App;
