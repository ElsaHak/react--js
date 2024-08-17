
import React from 'react';
import { Box, Heading, Text, Button, Stack, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase } from 'react-icons/fa'; 

const Home = () => {
    return (
        <Box
            bgGradient="linear(to-r, teal.100, blue.100)"
            textAlign="center"
            py={20}
            px={8}
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            zIndex="1"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgImage="url('https://www.hermos.com/wp-content/uploads/2022/08/hermos-karriere-titelbild.jpg')"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                zIndex="-1"
                opacity="0.5"
            />
            <Box zIndex="2" bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="lg">
                <Heading as="h2" size="2xl" mb={6} color="black">
                    Welcome to the Job Board Platform
                </Heading>
                <Text fontSize="lg" color="black" mb={12}>
                    Find the best jobs and apply with ease. Employers can post job listings and manage applications.
                </Text>
                <Stack spacing={4} direction="row" align="center" justify="center">
                   
                    <Link to="/login?role=jobseeker">
                        <Button
                            colorScheme="teal"
                            size="lg"
                            variant="solid"
                            borderRadius="md"
                            _hover={{
                                bg: 'teal.600',
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease, bg 0.3s ease',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Icon as={FaUser} mr={2} />
                            Job Seeker Login
                        </Button>
                    </Link>
                    <Link to="/login?role=employer">
                        <Button
                            colorScheme="blue"
                            size="lg"
                            variant="solid"
                            borderRadius="md"
                            _hover={{
                                bg: 'blue.600',
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease, bg 0.3s ease',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Icon as={FaBriefcase} mr={2} />
                            Employer Login
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Home;
