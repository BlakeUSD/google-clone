import React from 'react';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />

          {/* DIRECT ALL OTHER LINKS TO HOME PAGE */}
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/store" element={<Home />} />
          <Route exact path="/gmail" element={<Home />} />
          <Route exact path="/all" element={<Home />} />
          <Route exact path="/news" element={<Home />} />
          <Route exact path="/images" element={<Home />} />
          <Route exact path="/shopping" element={<Home />} />
          <Route exact path="/maps" element={<Home />} />
          <Route exact path="/more" element={<Home />} />
          <Route exact path="/settings" element={<Home />} />
          <Route exact path="/tools" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
