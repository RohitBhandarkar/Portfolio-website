import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Alzheimer's Disease Detection",
    description: "Hybrid Machine Learning Model for Early Detection of Alzheimer's Disease using advanced neural networks and image processing techniques.",
    image: "../../../public/images/projects/Alzheimers.jpg",
    github: "https://github.com/RohitBhandarkar/Hybrid-Machine-Learning-Model-for-Early-Detection-of-Alzheimer-s-Disease",
    technologies: ["Python", "TensorFlow", "OpenCV", "scikit-learn"],
    featured: true
  },
  {
    id: 2,
    title: "Block Matching Algorithm",
    description: "Implementation of advanced block matching algorithms for video compression and motion estimation.",
    image: "../../../public/images/projects/Block Matching Algorithm.png",
    github: "https://github.com/RohitBhandarkar/Block-Matching-Algorithm",
    technologies: ["Python", "OpenCV", "NumPy"]
  },
  {
    id: 3,
    title: "TicTacToe AI",
    description: "Unbeatable TicTacToe bot using minimax algorithm with alpha-beta pruning optimization.",
    image: "../../../public/images/projects/tictactoe.png",
    github: "https://github.com/RohitBhandarkar/TicTacToe-bot-using-minimax",
    technologies: ["Python", "AI", "Game Theory"]
  },
  {
    id: 4,
    title: "Covid vs India",
    description: "Data visualization and analysis platform for tracking COVID-19 impact across India.",
    image: "../../../public/images/projects/CovidVsIndia.jpg",
    github: "https://github.com/RohitBhandarkar/CovidVsIndia",
    technologies: ["Python", "Data Analysis", "Visualization"]
  }
];

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box id="projects" py={20} bg="gray.900">
      <Container maxW="container.xl">
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
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Projects; 