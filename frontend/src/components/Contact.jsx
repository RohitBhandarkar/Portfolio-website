import React from 'react';
import { Box, Container, Heading, VStack, HStack, Link, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const socialLinks = [
    {
      label: 'Email',
      href: 'mailto:rohitbhandarkar@hotmail.com',
      icon: FaEnvelope,
      color: 'red.400'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/rohitbhandarkar',
      icon: FaGithub,
      color: 'gray.400'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohit-bhandarkar-52060b22a/',
      icon: FaLinkedin,
      color: 'linkedin.500'
    },
    {
      label: 'X',
      href: 'https://x.com/Real_Rohit2002',
      icon: FaXTwitter,
      color: 'gray.400'
    }
  ];

  return (
    <Box id="contact" py={20} bg="gray.900">
      <Container maxW="container.md">
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
            Get In Touch
          </Heading>
          <Box
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
          >
            <VStack spacing={8}>
              <Text color="gray.300" fontSize="lg" textAlign="center">
                Feel free to reach out! I'm always open to discussing new projects, opportunities, or just having a chat.
              </Text>
              <HStack spacing={8} justify="center" wrap="wrap">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href}
                    isExternal
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                  >
                    <VStack spacing={2}>
                      <Icon 
                        as={link.icon} 
                        w={8} 
                        h={8} 
                        color={link.color}
                        _hover={{ color: 'brand.primary' }}
                      />
                      <Text color="gray.300" fontSize="sm">
                        {link.label}
                      </Text>
                    </VStack>
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;