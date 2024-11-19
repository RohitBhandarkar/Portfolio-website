import React, { useState } from 'react';
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You would replace this URL with your actual backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: "gray.600" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="gray.300">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: "gray.600" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="gray.300">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
                isLoading={isSubmitting}
                loadingText="Sending..."
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