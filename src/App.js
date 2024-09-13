// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Bookmarks from './components/Bookmarks';
import Container from '@mui/material/Container';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
