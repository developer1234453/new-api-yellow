// src/components/JobDetailsWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';
import JobDetails from './JobDetails';

const JobDetailsWrapper = () => {
  const { id } = useParams(); 

  return <JobDetails id={id} />;
};

export default JobDetailsWrapper;
