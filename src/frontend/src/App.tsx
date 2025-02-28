// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageUploadPage from './components/ImageUploadPage';
import CameraStreamPage from './components/CameraStreamPage';
import DepthGPTPage from './components/DepthGPTPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageUploadPage />} />
        <Route path="/camera-stream" element={<CameraStreamPage />} />
        <Route path="/depthgpt" element={<DepthGPTPage />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
