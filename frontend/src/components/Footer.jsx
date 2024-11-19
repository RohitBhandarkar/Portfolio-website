
import React from 'react';
import { Box, Container, Stack, Text, IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={8}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text>© 2024 Rohit Bhandarkar. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <IconButton
              as={Link}
              href="https://github.com/RohitBhandarkar"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white', bg: 'gray.700' }}
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/rohit-bhandarkar-52060b22a/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white', bg: 'gray.700' }}
            />
            <IconButton
              as={Link}
              href="https://x.com/Real_Rohit2002"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white', bg: 'gray.700' }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer; 