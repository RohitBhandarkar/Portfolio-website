import React from 'react';
import { Box, Container, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(10, 10, 10, 0.95)"
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <Container maxW="container.xl" py={4}>
        <HStack justify="space-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="#"
              fontSize="2xl"
              fontWeight="bold"
              color="brand.primary"
              _hover={{ textDecoration: 'none' }}
            >
              RB
            </Link>
          </motion.div>
          <HStack spacing={8}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#interests">Interests</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

const NavLink = ({ href, children }) => (
  <motion.div
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <Link
      href={href}
      color="white"
      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar; 