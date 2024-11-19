import React, { Suspense } from 'react';
import { Box, Container, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Hero() {
  return (
    <Box
      h="100vh"
      position="relative"
      overflow="hidden"
    >
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      <Container
        maxW="container.xl"
        h="full"
        position="relative"
        zIndex={1}
      >
        <Flex
          h="full"
          align="center"
          direction="column"
          justify="center"
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="4xl"
              bgGradient="linear(to-r, brand.primary, blue.400)"
              bgClip="text"
              mb={4}
            >
              Rohit Bhandarkar
            </Heading>
            <Text
              fontSize="xl"
              color="gray.400"
              maxW="2xl"
              mb={8}
            >
              A passionate tech enthusiast from Bangalore, specializing in Machine Learning,
              Image Processing, and Software Development
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              justify="center"
            >
              <Button
                size="lg"
                variant="solid"
                leftIcon={<i className="fas fa-download" />}
                as="a"
                href="/Rohit-Bhandarkar-Resume.pdf"
                download
              >
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                leftIcon={<i className="fas fa-envelope" />}
                as="a" 
                href="#contact"
              >
                Contact Me
              </Button>
            </Stack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;