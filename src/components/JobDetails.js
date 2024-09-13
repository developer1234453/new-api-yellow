// src/components/JobDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(`https://testapi.getlokalapp.com/common/job/${id}`);
        setJob(response.data.job);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!job) return <Typography>No job details available.</Typography>;

  return (
    <Container>
      <Typography variant="h2">{job.title}</Typography>
      <Typography variant="body1">{job.description}</Typography>
      <Typography variant="body2">Location: {job.location || 'Not available'}</Typography>
      <Typography variant="body2">Salary: {job.salary}</Typography>
      <Typography variant="body2">Phone: {job.phone}</Typography>
    </Container>
  );
};

export default JobDetails;
