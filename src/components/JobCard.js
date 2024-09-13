// src/components/JobCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { addBookmark } from '../utils/storage'; // Function to handle bookmarks

const JobCard = ({ job }) => {
  const handleBookmark = () => {
    addBookmark(job.id);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography color="textSecondary">{job.salary}</Typography>
        <Typography color="textSecondary">{job.phone}</Typography>
        <Button component={Link} to={`/job/${job.id}`} variant="contained" color="primary">
          View Details
        </Button>
        <Button onClick={handleBookmark} variant="outlined" color="secondary">
          Bookmark
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
