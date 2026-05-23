import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import OnlineStatus from './components/OnlineStatus';

import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import AboutPage from './pages/AboutPage';

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Todo App Avancée</h1>

        <div className="header-actions">
          <ThemeToggle />
          <OnlineStatus />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:section" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;