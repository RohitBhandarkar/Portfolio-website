import React from 'react';
import { Box, Container, Heading, Text, Stack, Image, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box id="about" py={20} bg="gray.900">
      <Container maxW="container.xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={5}>
              <Heading
                bgGradient="linear(to-r, brand.primary, blue.400)"
                bgClip="text"
              >
                About Me
              </Heading>
              <Text color="gray.300" fontSize="lg">
                A tech enthusiast hailing from the Silicon Valley of India, I'm passionate about pushing the boundaries of what's possible with technology. My journey in tech has been driven by curiosity and a desire to solve complex problems.
              </Text>
              <Text color="gray.300" fontSize="lg">
                Specializing in machine learning and image processing, I'm constantly exploring new technologies and contributing to open-source projects. I believe in the power of technology to make a positive impact on the world.
              </Text>
            </Stack>
            <Box>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/God.jpeg"
                  alt="Rohit Bhandarkar"
                  borderRadius="xl"
                  boxShadow="xl"
                  objectFit="cover"
                  w="full"
                  h={{ base: "300px", md: "400px" }}
                />
              </motion.div>
            </Box>
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About; 