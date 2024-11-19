import React from 'react';
import { Box, Container, Heading, VStack, Text, Link, HStack, Circle, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    company: "JP Morgan Chase",
    position: "Software Engineering Program Intern",
    period: "Jan 2025 - Present",
    description: "Currently working on exciting projects in software development.",
    url: "https://www.jpmorganchase.com/"
  },
  {
    id: 2,
    company: "JP Morgan Chase",
    position: "Software Engineering Program Intern",
    period: "June 2024 - Aug 2024",
    description: "Built the entire backend infrastructure for visualization of hierarchical data with user authentication",
    url: "https://www.jpmorganchase.com/"
  },
  {
    id: 3,
    company: "Cevo",
    position: "Intern Software Developer",
    period: "Aug 2023 - Dec 2023",
    description: "Worked on image processing, OTA updates for NVIDIA devices, CI/CD pipelining, edge computing, and video processing.",
    url: "https://www.cevo.tech/home"
  }
];

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box id="experience" py={20} bg="gray.900">
      <Container maxW="container.lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <Heading
            mb={10}
            textAlign="center"
            bgGradient="linear(to-r, brand.primary, blue.400)"
            bgClip="text"
          >
            Experience
          </Heading>
          <VStack spacing={8} align="stretch">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <HStack spacing={4} align="flex-start">
                  <VStack spacing={0} align="center" pt={2}>
                    <Circle size={4} bg="brand.primary" />
                    {index !== experiences.length - 1 && (
                      <Divider orientation="vertical" h="100px" borderColor="brand.primary" />
                    )}
                  </VStack>
                  <Box flex={1}>
                    <Link href={exp.url} isExternal>
                      <Heading size="md" color="brand.primary">
                        {exp.company}
                      </Heading>
                    </Link>
                    <Text fontSize="lg" fontWeight="bold" color="white">
                      {exp.position}
                    </Text>
                    <Text fontSize="sm" color="gray.400" mb={2}>
                      {exp.period}
                    </Text>
                    <Text color="gray.300">
                      {exp.description}
                    </Text>
                  </Box>
                </HStack>
              </motion.div>
            ))}
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience; 