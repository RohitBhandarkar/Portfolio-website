import React, { useState, useEffect } from 'react';
import { Box, Container, HStack, Link, useBreakpointValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={scrolled ? "rgba(10, 10, 10, 0.98)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      boxShadow={scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"}
      transition="all 0.3s ease"
      zIndex={1000}
    >
      <Container maxW="container.xl" py={scrolled ? 3 : 4}>
        <HStack justify="space-between" align="center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="#"
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.primary, blue.400)"
              bgClip="text"
              _hover={{ textDecoration: 'none' }}
            >
              RB
            </Link>
          </motion.div>
          <AnimatePresence>
            <HStack 
              spacing={{ base: 4, md: 8 }}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#interests">Interests</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </HStack>
          </AnimatePresence>
        </HStack>
      </Container>
    </Box>
  );
}

const NavLink = ({ href, children, isSpecial }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.05 }}
    whileTap={{ y: 0 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      href={href}
      px={3}
      py={2}
      rounded="md"
      fontSize="md"
      fontWeight="bold"
      color="blue.400"
      bg={'transparent'}
      _hover={{
        color: 'white',
        bg: 'rgba(255, 255, 255, 0.1)',
        textDecoration: 'none',
        transform: 'translateY(-2px)'
      }}
      transition="all 0.3s ease"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;