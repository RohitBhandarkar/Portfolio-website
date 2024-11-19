import React from 'react';
import { Box, Image, Text, Stack, Heading, Tag, Link, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        borderRadius="xl"
        overflow="hidden"
        bg="gray.800"
        position="relative"
        minH="400px"
        w="full"
        _hover={{
          '& > .project-overlay': {
            opacity: 1
          }
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          w="full"
          h="300px"
          objectFit="cover"
        />
        <Box
          className="project-overlay"
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          bg="rgba(0,0,0,0.8)"
          opacity="0"
          transition="opacity 0.3s"
          p={8}
        >
          <Stack spacing={6}>
            <Heading size="lg" color="brand.primary">
              {project.title}
            </Heading>
            <Text color="gray.300" fontSize="lg">
              {project.description}
            </Text>
            <Stack direction="row" flexWrap="wrap" spacing={3}>
              {project.technologies.map((tech) => (
                <Tag key={tech} colorScheme="teal" size="md">
                  {tech}
                </Tag>
              ))}
            </Stack>
            <Stack direction="row" spacing={6}>
              <IconButton
                as={Link}
                href={project.github}
                target="_blank"
                icon={<FaGithub />}
                aria-label="GitHub"
                colorScheme="gray"
                size="lg"
              />
              {project.demo && (
                <IconButton
                  as={Link}
                  href={project.demo}
                  target="_blank"
                  icon={<FaExternalLinkAlt />}
                  aria-label="Live Demo"
                  colorScheme="teal"
                  size="lg"
                />
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ProjectCard;