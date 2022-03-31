import React from 'react';
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route
} from 'react-router-dom';
import { Routes } from './utils/routes';
import Introduction from './pages/Introduction';
import Setup from './pages/Setup';
import Dashboard from './pages/Dashboard';
import Reader from './pages/Reader';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path={Routes.Introduction} element={<Introduction />} />
        <Route path={Routes.Setup} element={<Setup />} />
        <Route path={Routes.Dashboard} element={<Dashboard />} />
        <Route path={Routes.Reader} element={<Reader />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default App;
