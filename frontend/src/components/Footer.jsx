import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={8}>
      <Container maxW="container.xl" textAlign="center">
        <Text>© 2024 Rohit Bhandarkar. All rights reserved.</Text>
      </Container>
    </Box>
  );
}

export default Footer;