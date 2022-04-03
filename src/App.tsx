import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes as RouterRoutes,
  Route
} from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Routes } from './utils/routes';
import RequireUser from './components/RequireUser';
import Introduction from './pages/Introduction';
import Setup from './pages/Setup';
import Dashboard from './pages/Dashboard';
import CreateDocument from './pages/CreateDocument';
import Reader from './pages/Reader';

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: 'linear-gradient(125deg, #3a52ff, #33346d)',
      fontFamily: 'Helvetica, Arial, sans-serif',
      margin: 0,
      minHeight: '100vh',
      padding: 0,
      transition: 'background 300ms ease-in-out'
    },
    '*': {
      boxSizing: 'border-box'
    }
  }
});

function App() {
  useStyles();

  return (
    <BrowserRouter basename="/power-reader">
      <RouterRoutes>
        <Route path={Routes.Introduction} element={<Introduction />} />
        <Route path={Routes.Setup} element={<Setup />} />
        <Route path={Routes.Dashboard} element={<RequireUser><Dashboard /></RequireUser>} />
        <Route path={Routes.CreateDocument} element={<RequireUser><CreateDocument /></RequireUser>} />
        <Route path={Routes.EditDocument} element={<RequireUser><CreateDocument /></RequireUser>} />
        <Route path={Routes.Reader} element={<RequireUser><Reader /></RequireUser>} />
        <Route path="*" element={<RequireUser><Navigate to={Routes.Dashboard} replace /></RequireUser>} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default App;
