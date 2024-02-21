import React from 'react';
import Login from './compnents/Accounts/Login';
import AsideBar from './compnents/Dashboard/AsideBar';
import Dashboard from './compnents/Dashboard/Dashboard';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateAccount from './compnents/Accounts/CreateAccount';
import Lead from './compnents/Dashboard/Lead';
import Broadcast from './compnents/Dashboard/Broadcast';
import PageNotFound from './compnents/Dashboard/PageNotFound';


function App() {

  return (
    <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<CreateAccount />} />
          <Route path="createacount" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lead" element={<Lead />} />
          <Route path="broadcast" element={<Broadcast />} />
          <Route
                    path="*"
                    element={<PageNotFound />}
                />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
