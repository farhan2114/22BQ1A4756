import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShortenerPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/:shortcode" element={<ShortenerPage />} />
    </Routes>
  );
}

export default App;
