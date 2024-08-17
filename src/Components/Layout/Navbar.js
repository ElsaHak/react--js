// src/components/Layout/Navbar.js
import React from 'react';
import { Flex, Button, Heading } from '@chakra-ui/react';

const Navbar = ({ onLogout }) => (
    <Flex
        bg="teal.600"
        p={4}
        color="white"
        justify="space-between"
        align="center"
        boxShadow="md"
    >
        <Heading size="lg" letterSpacing="wider">
            Employer Dashboard
        </Heading>
        <Button colorScheme="red" size="md" onClick={onLogout}>
            Logout
        </Button>
    </Flex>
);

export default Navbar;
