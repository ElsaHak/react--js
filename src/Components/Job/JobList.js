// // // // // src/Components/Job/JobList.js
// // // // import React from 'react';
// // // // import { Box, Button, Stack, Text } from '@chakra-ui/react';

// // // // const JobList = ({ jobs, onEdit, onDelete }) => {
// // // //     return (
// // // //         <Stack spacing={4}>
// // // //             {jobs.map((job) => (
// // // //                 <Box key={job.id} p={4} borderWidth={1} borderRadius="md">
// // // //                     <Text fontSize="lg" fontWeight="bold">{job.title}</Text>
// // // //                     <Text>{job.description}</Text>
// // // //                     <Text color="gray.500">Type: {job.type}</Text>
// // // //                     <Button colorScheme="teal" onClick={() => onEdit(job)}>
// // // //                         Edit
// // // //                     </Button>
// // // //                     <Button colorScheme="red" onClick={() => onDelete(job)} ml={4}>
// // // //                         Delete
// // // //                     </Button>
// // // //                 </Box>
// // // //             ))}
// // // //         </Stack>
// // // //     );
// // // // };

// // // // export default JobList;
// // // import React, { useState } from 'react';
// // // import { Box, SimpleGrid, Button, HStack, Text } from '@chakra-ui/react';
// // // import JobCard from './JobCard';

// // // const JobList = ({ jobs, onEdit, onDelete }) => {
// // //     const [currentPage, setCurrentPage] = useState(1);
// // //     const jobsPerPage = 6; // Number of jobs per page

// // //     const handlePageChange = (pageNumber) => {
// // //         setCurrentPage(pageNumber);
// // //     };

// // //     // Slice the jobs array for pagination
// // //     const indexOfLastJob = currentPage * jobsPerPage;
// // //     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
// // //     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

// // //     const totalPages = Math.ceil(jobs.length / jobsPerPage);

// // //     return (
// // //         <Box>
// // //             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// // //                 {currentJobs.map((job) => (
// // //                     <JobCard
// // //                         key={job.id}
// // //                         job={job}
// // //                         onEdit={() => onEdit(job)}
// // //                         onDelete={() => onDelete(job)}
// // //                     />
// // //                 ))}
// // //             </SimpleGrid>
// // //             <HStack spacing={4} mt={4} justify="center">
// // //                 {Array.from({ length: totalPages }, (_, index) => (
// // //                     <Button
// // //                         key={index + 1}
// // //                         onClick={() => handlePageChange(index + 1)}
// // //                         colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
// // //                     >
// // //                         {index + 1}
// // //                     </Button>
// // //                 ))}
// // //             </HStack>
// // //         </Box>
// // //     );
// // // };

// // // export default JobList;
// // import React, { useState } from 'react';
// // import { Box, SimpleGrid, Button, HStack } from '@chakra-ui/react';
// // import JobCard from './JobCard';

// // const JobList = ({ jobs, onEdit, onDelete }) => {
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const jobsPerPage = 6; // Number of jobs per page

// //     const handlePageChange = (pageNumber) => {
// //         setCurrentPage(pageNumber);
// //     };

// //     // Slice the jobs array for pagination
// //     const indexOfLastJob = currentPage * jobsPerPage;
// //     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
// //     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

// //     const totalPages = Math.ceil(jobs.length / jobsPerPage);

// //     return (
// //         <Box>
// //             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {currentJobs.map((job) => (
// //                     <JobCard
// //                         key={job.id}
// //                         job={job}
// //                         onEdit={() => onEdit(job)}
// //                         onDelete={() => onDelete(job)}
// //                     />
// //                 ))}
// //             </SimpleGrid>
// //             {totalPages > 1 && ( // Only show pagination if more than one page
// //                 <HStack spacing={4} mt={4} justify="center">
// //                     {Array.from({ length: totalPages }, (_, index) => (
// //                         <Button
// //                             key={index + 1}
// //                             onClick={() => handlePageChange(index + 1)}
// //                             colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
// //                         >
// //                             {index + 1}
// //                         </Button>
// //                     ))}
// //                 </HStack>
// //             )}
// //         </Box>
// //     );
// // };

// // export default JobList;
// import React, { useState } from 'react';
// import { Box, SimpleGrid, Button, HStack } from '@chakra-ui/react';
// import JobCard from './JobCard';

// const JobList = ({ jobs, onEdit, onDelete }) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 6; // Number of jobs per page

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     // Slice the jobs array for pagination
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//     const totalPages = Math.ceil(jobs.length / jobsPerPage);

//     return (
//         <Box>
//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
//                 {currentJobs.map((job) => (
//                     <JobCard
//                         key={job.id}
//                         job={job}
//                         onEdit={() => onEdit(job)}
//                         onDelete={() => onDelete(job)}
//                     />
//                 ))}
//             </SimpleGrid>
//             {totalPages > 1 && ( // Only show pagination if more than one page
//                 <HStack spacing={4} mt={4} justify="center">
//                     {Array.from({ length: totalPages }, (_, index) => (
//                         <Button
//                             key={index + 1}
//                             onClick={() => handlePageChange(index + 1)}
//                             colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
//                         >
//                             {index + 1}
//                         </Button>
//                     ))}
//                 </HStack>
//             )}
//         </Box>
//     );
// };

// export default JobList;
import React, { useState } from 'react';
import { Box, Grid, Button, HStack } from '@chakra-ui/react';
import JobCard from './JobCard';

const JobList = ({ jobs, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6; // Number of jobs per page

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Slice the jobs array for pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    return (
        <Box>
            {/* Grid layout with 2 cards per row */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%">
                {currentJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onEdit={() => onEdit(job)}
                        onDelete={() => onDelete(job)}
                    />
                ))}
            </Grid>
            {totalPages > 1 && ( // Only show pagination if more than one page
                <HStack spacing={4} mt={4} justify="center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </HStack>
            )}
        </Box>
    );
};

export default JobList;
