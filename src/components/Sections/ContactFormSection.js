import styles from "../../styles/ContactForm/ContactForm.module.css";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box w="100%" p={4}>
      <VStack spacing={4} align="start">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea rows={4} />
        </FormControl>
        <Button w="100%" bg="red.500" color="white" _hover={{ bg: "red.600" }}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
