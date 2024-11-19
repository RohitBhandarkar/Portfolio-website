import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Icon, Stack, Tag, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiPython, SiReact, SiDjango, SiNumpy } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';

const skills = [
  {
    category: 'Machine Learning',
    description: 'Expertise in deep learning frameworks and ML libraries',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 'Advanced' },
      { name: 'PyTorch', icon: SiPytorch, level: 'Advanced' },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 'Advanced' },
    ]
  },
  {
    category: 'Image Processing',
    description: 'Strong background in computer vision and image manipulation',
    items: [
      { name: 'OpenCV', icon: SiOpencv, level: 'Advanced' },
      { name: 'NumPy', icon: SiNumpy, level: 'Advanced' },
    ]
  },
  {
    category: 'Backend Development',
    description: 'Building robust and scalable server-side applications',
    items: [
      { name: 'Python', icon: SiPython, level: 'Expert' },
      { name: 'Django', icon: SiDjango, level: 'Advanced' },
    ]
  },
  {
    category: 'Quantitative Research',
    description: 'Developing sophisticated quantitative analysis and research tools',
    items: [
      { name: 'Statistical Analysis', icon: FaChartLine, level: 'Intermediate' },
      { name: 'Research Methods', icon: FaChartLine, level: 'Beginner' },
      { name: 'Data Modeling', icon: FaChartLine, level: 'Intermediate' },
    ]
  }
];

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box id="skills" py={20} bg="gray.900">
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
            Skills & Expertise
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {skills.map((category) => (
              <motion.div
                key={category.category}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  bg="gray.800"
                  p={6}
                  borderRadius="xl"
                  height="100%"
                  boxShadow="xl"
                  border="1px"
                  borderColor="gray.700"
                >
                  <Heading size="md" color="brand.primary" mb={3}>
                    {category.category}
                  </Heading>
                  <Text color="gray.400" mb={4} fontSize="sm">
                    {category.description}
                  </Text>
                  <Stack spacing={4}>
                    {category.items.map((skill) => (
                      <Box key={skill.name}>
                        <Stack direction="row" align="center" spacing={3} mb={2}>
                          {skill.icon && (
                            <Icon
                              as={skill.icon}
                              w={6}
                              h={6}
                              color="teal.400"
                            />
                          )}
                          <Text color="gray.300">{skill.name}</Text>
                          <Tag
                            size="sm"
                            colorScheme={skill.level === 'Expert' ? 'teal' : 'blue'}
                            ml="auto"
                          >
                            {skill.level}
                          </Tag>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Skills;