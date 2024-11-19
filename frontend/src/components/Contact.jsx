import React from 'react';
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    toast({
      title: "Message sent!",
      description: "I'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

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
            as="form"
            onSubmit={handleSubmit}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="gray.300">Name</FormLabel>
                <Input
                  type="text"
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: "gray.600" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="gray.300">Email</FormLabel>
                <Input
                  type="email"
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: "gray.600" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="gray.300">Message</FormLabel>
                <Textarea
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: "gray.600" }}
                  rows={6}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                w="full"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact; 