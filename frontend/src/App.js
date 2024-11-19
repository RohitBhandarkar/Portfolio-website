import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bg="gray.900" minH="100vh">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Interests />
          <Experience />
          <Contact />
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App; 