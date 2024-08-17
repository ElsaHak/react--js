// src/components/Layout/Sidebar.js
import React from 'react';
import { Box, VStack, Link, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onClose, isOpen }) => (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Employer Dashboard</DrawerHeader>
                <DrawerBody>
                    <VStack align="start" spacing={4} p={4}>
                        <Link as={NavLink} to="/employer-dashboard" onClick={onClose}>Home</Link>
                        <Link as={NavLink} to="/employer-dashboard/jobs" onClick={onClose}>Manage Jobs</Link>
                        <Link as={NavLink} to="/employer-dashboard/profile" onClick={onClose}>Profile</Link>
                        <Link as={NavLink} to="/employer-dashboard/settings" onClick={onClose}>Settings</Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
);

const SidebarToggle = ({ onOpen }) => (
    <Button variant="outline" onClick={onOpen} mr={4}>
        <HamburgerIcon />
    </Button>
);

export { Sidebar, SidebarToggle };
