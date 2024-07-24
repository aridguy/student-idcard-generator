import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from './Routes/Admin/Admin';
import Home from './Routes/Home/Home';
import GenerateId from './Routes/Auth/GenerateId';
import IdCards from './Routes/Auth/IdCards';
import TryPost from './Routes/Admin/TryPost';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="generateid" element={<GenerateId />} />
          <Route path="idcards" element={<IdCards />} />
          <Route path="trypost" element={<TryPost />} />
        </Routes>
      </BrowserRouter>
      




    </div>
  );
}

export default App;
