// src/App.tsx
import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Brochures from './pages/Brochures';
import Reels from './pages/Reels';
import Logos from './pages/Logos';
import Websites from './pages/Websites';
import OfflineMarketing from './pages/OfflineMarketing';
import StaticPosts from './pages/StaticPosts';
import Login from './pages/Login';
import AllFiles from './pages/AllFiles';

const AppLayout: React.FC<{
  children: React.ReactNode;
  darkMode: boolean;
  toggleTheme: () => void;
}> = ({ children, darkMode, toggleTheme }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header darkMode={darkMode} toggleTheme={toggleTheme} />}
      <Box sx={{ display: 'flex', pt: !isLoginPage ? '64px' : 0 }}>
        {!isLoginPage && <Sidebar />}
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

const AppRoutes: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/offline-marketing" element={<OfflineMarketing />} />
          <Route path="/static-posts" element={<StaticPosts />} />
          <Route path="/all-files" element={<AllFiles />} />
        </>
      ) : (
        // If not logged in, redirect any protected route to login
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          background: {
            default: darkMode ? '#121212' : '#f5f5f5',
          },
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    // Check login status on load
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppLayout darkMode={darkMode} toggleTheme={toggleTheme}>
          <AppRoutes isLoggedIn={isLoggedIn} />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
