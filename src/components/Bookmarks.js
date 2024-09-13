// src/components/Bookmarks.js
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import JobCard from './JobCard';
import { getBookmarks } from '../utils/storage'; // Function to get bookmarks

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const fetchBookmarkedJobs = async () => {
      const ids = getBookmarks();
      // Fetch details for each bookmarked job
      // Placeholder implementation:
      // You would normally fetch job details from the API based on IDs
      setBookmarkedJobs(ids.map(id => ({ id, title: `Job ${id}` })));
    };

    fetchBookmarkedJobs();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Bookmarked Jobs</Typography>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map(job => <JobCard key={job.id} job={job} />)
      ) : (
        <Typography>No bookmarked jobs.</Typography>
      )}
    </Container>
  );
};

export default Bookmarks;
