import styles from "../../styles/ContactForm/ContactForm.module.css";
import { useRef } from "react";
import { sendEmail } from "../../../utils/sendMail";
import { toast } from "react-toastify";

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
  const form = useRef();

  const handleSubmit = () => {
    sendEmail(form.current);
  };
  return (
    <Box w="100%" p={4}>
      <form ref={form}>
        <VStack spacing={4} align="start">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              border="2px"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              border="2px"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              border="2px"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              rows={4}
              border="2px"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
          <Button
            w="100%"
            bg="red.500"
            color="white"
            borderRadius="0"
            _hover={{ bg: "red.600" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
