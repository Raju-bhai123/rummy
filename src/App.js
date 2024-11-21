
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Frontpage from './pages/frontpage';
import StaticPage from './pages/staticpage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
        <Routes>
          <Route path="/Page" element={<StaticPage />} />
        </Routes>

      
      </Router>
    </div>
  );
}

export default App;


