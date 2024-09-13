// src/components/Jobs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const JOBS_API_URL = 'https://testapi.getlokalapp.com/common/jobs?page=';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${JOBS_API_URL}${page}`);
      console.log('API Response:', response.data); // Log the entire response

      // Ensure response.data and response.data.data exist
      if (!response.data || !response.data.data) {
        throw new Error('Unexpected response structure');
      }

      // Adjust based on the actual response structure
      const jobsData = response.data.data.jobs;

      if (!Array.isArray(jobsData)) {
        throw new Error('Jobs data is not an array');
      }

      setJobs(prevJobs => [...prevJobs, ...jobsData]);

      // Ensure hasMore is defined and boolean
      const hasMore = typeof response.data.data.hasMore === 'boolean' ? response.data.data.hasMore : false;
      setHasMore(hasMore);

    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const loadMoreJobs = () => setPage(prevPage => prevPage + 1);

  return (
    <Container>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {jobs.length === 0 && !loading && <Typography>No jobs available.</Typography>}
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      {hasMore && !loading && (
        <Button onClick={loadMoreJobs} variant="contained" color="primary">
          Load More
        </Button>
      )}
    </Container>
  );
};

export default Jobs;
