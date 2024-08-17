// src/components/Layout/Header.js
import React from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/login');
    };

    return (
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading as="h1" size="lg">{title}</Heading>
            <Button colorScheme="blue" onClick={handleLogout}>
                Logout
            </Button>
        </Flex>
    );
};

export default Header;
