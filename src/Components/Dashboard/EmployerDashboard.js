
import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Text, Stack, Center } from '@chakra-ui/react';
import Navbar from '../Layout/Navbar';
import JobForm from '../Job/JobForm';
import JobList from '../Job/JobList';

const EmployerDashboard = () => {
    const [isPostingJob, setIsPostingJob] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        setJobs(storedJobs);
    }, []);

    const handlePostJob = () => {
        setIsPostingJob(true);
    };

    const handleCancelPost = () => {
        setIsPostingJob(false);
    };

    const handleAddJob = (newJob) => {
        const updatedJobs = [...jobs, newJob];
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        handleCancelPost();
    };

    const handleEditJob = (editedJob) => {
        const updatedJobs = jobs.map((job) =>
            job.id === editedJob.id ? editedJob : job
        );
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };

    const handleDeleteJob = (deletedJob) => {
        const updatedJobs = jobs.filter((job) => job.id !== deletedJob.id);
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };

    // Debugging: Check filter and job type
    console.log('Filter:', filter);
    console.log('Jobs:', jobs);

    // const filteredJobs = jobs.filter((job) => {
    //     const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    //     const matchesFilter = filter === 'All' || job.type === filter;
    //     console.log('Job:', job.title, 'Type:', job.type, 'Matches Filter:', matchesFilter);
    //     return matchesSearchQuery && matchesFilter;
    // });
    const filteredJobs = jobs.filter((job) => {
      const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'All' || (job.type && job.type === filter);
              console.log('Job:', job.title, 'Type:', job.type, 'Matches Filter:', matchesFilter);

      return matchesSearchQuery && matchesFilter;
  });
  

    return (
        <Box>
            <Navbar onPostJob={handlePostJob} />
            {isPostingJob && (
                <JobForm onCancel={handleCancelPost} onSubmit={handleAddJob} />
            )}
            <Box p={4}>
                <Center flexDirection="column">
                    <Button colorScheme="teal" size="lg" onClick={handlePostJob} mb={4}>
                        Post Job
                    </Button>

                    <Input
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        mb={4}
                        width="50%"
                    />

                    <Stack direction="row" spacing={4} mb={4}>
                        <Button
                            colorScheme={filter === 'Internship' ? 'teal' : 'gray'}
                            onClick={() => setFilter('Internship')}
                        >
                            Internship
                        </Button>
                        <Button
                            colorScheme={filter === 'Remote' ? 'teal' : 'gray'}
                            onClick={() => setFilter('Remote')}
                        >
                            Remote
                        </Button>
                        <Button
                            colorScheme={filter === 'Full-time' ? 'teal' : 'gray'}
                            onClick={() => setFilter('Full-time')}
                        >
                            Full-time
                        </Button>
                        <Button
                            colorScheme={filter === 'Part-time' ? 'teal' : 'gray'}
                            onClick={() => setFilter('Part-time')}
                        >
                            Part-time
                        </Button>
                        <Button
                            colorScheme={filter === 'All' ? 'teal' : 'gray'}
                            onClick={() => setFilter('All')}
                        >
                            All
                        </Button>
                    </Stack>

                    {filteredJobs.length === 0 ? (
                        <Text>No jobs available.</Text>
                    ) : (
                        <JobList
                            jobs={filteredJobs}
                            onEdit={handleEditJob}
                            onDelete={handleDeleteJob}
                        />
                    )}
                </Center>
            </Box>
        </Box>
    );
};

export default EmployerDashboard;
