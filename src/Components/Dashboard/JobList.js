
import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import JobCard from '../Job/JobCard';
import JobForm from '../Job/JobForm';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        setJobs(storedJobs);
    }, []);

    const handleEditJob = (index) => {
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditIndex(null);
    };

    const handleDeleteJob = (index) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };

    return (
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading mb={4}>Job Listings</Heading>
            <VStack spacing={4}>
                {isEditing && editIndex !== null ? (
                    <JobForm
                        onCancel={handleCancelEdit}
                        job={jobs[editIndex]}
                        onUpdate={(updatedJob) => {
                            const updatedJobs = [...jobs];
                            updatedJobs[editIndex] = updatedJob;
                            setJobs(updatedJobs);
                            localStorage.setItem('jobs', JSON.stringify(updatedJobs));
                            handleCancelEdit();
                        }}
                    />
                ) : (
                    jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            job={job}
                            onEdit={() => handleEditJob(index)}
                            onDelete={() => handleDeleteJob(index)}
                        />
                    ))
                )}
            </VStack>
        </Box>
    );
};

export default JobList;
