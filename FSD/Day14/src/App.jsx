import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout";
import DashBorad from "./components/DashBorad";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regLogin={data} />} />
            <Route path="/register" element={<Register regData={setData} />} />
          </Route>
          <Route path="/dashboard" element={<DashBorad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
0;