import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaGamepad, FaGithub } from 'react-icons/fa';

const interests = [
  {
    title: "Quantitative Research Development",
    icon: FaChartLine,
    description: "Exploring the intersection of mathematics, statistics, and programming in financial markets. Studying algorithmic trading strategies and market analysis techniques."
  },
  {
    title: "Game Theory",
    icon: FaGamepad,
    description: "Fascinated by the mathematical models of strategic interaction. Currently studying Nash equilibrium, mechanism design, and their applications in AI and economics."
  },
  {
    title: "Open Source Collaboration",
    icon: FaGithub,
    description: "Actively seeking opportunities to contribute to meaningful open source projects. Passionate about collaborative development and community-driven innovation."
  }
];

function Interests() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box id="interests" py={20} bg="gray.900">
      <Container maxW="container.xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading
            mb={10}
            textAlign="center"
            bgGradient="linear(to-r, brand.primary, blue.400)"
            bgClip="text"
          >
            Current Interests
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <VStack
                  bg="gray.800"
                  p={6}
                  borderRadius="xl"
                  spacing={4}
                  height="100%"
                  boxShadow="xl"
                  border="1px"
                  borderColor="gray.700"
                  _hover={{
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <Icon
                    as={interest.icon}
                    w={10}
                    h={10}
                    color="brand.primary"
                  />
                  <Heading size="md" color="white" textAlign="center">
                    {interest.title}
                  </Heading>
                  <Text color="gray.400" textAlign="center">
                    {interest.description}
                  </Text>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Interests; 