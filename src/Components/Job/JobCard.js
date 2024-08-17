
import React from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const JobCard = ({ job, onEdit, onDelete }) => (
    <Box
        p={4}
        borderWidth={1}
        borderRadius="md"
        bg="white"
        borderColor="gray.200"
        boxShadow="md"
        _hover={{ borderColor: 'teal.400', boxShadow: 'lg' }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%" 
    >
        <VStack align="start" spacing={3}>
            <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
            <Text>{job.description}</Text>
            <Text>Location: {job.location}</Text>
            <Text>Salary: {job.salary}</Text>
            <Text>Category: {job.category}</Text>
            <Text>Requirements: {job.requirements}</Text>
        </VStack>
        <HStack spacing={4} mt={4} justifyContent="flex-end">
            <Button colorScheme="blue" onClick={onEdit} leftIcon={<EditIcon />}>Edit</Button>
            <Button colorScheme="red" onClick={onDelete} leftIcon={<DeleteIcon />}>Delete</Button>
        </HStack>
    </Box>
);

export default JobCard;
