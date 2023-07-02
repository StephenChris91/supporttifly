import styles from "../../styles/ContactForm/ContactForm.module.css";
import { useRef, useState } from "react";
import { sendEmail } from "../../../utils/sendMail";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";

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
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields");
      setNameError(!name);
      setEmailError(!email);
      setSubjectError(!subject);
      setMessageError(!message);
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      toast.error("Please enter a valid email address");
      setEmailError(true);
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(formRef.current);

      await sendEmail(formData);
      toast.success("Email sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
    setLoading(false);
  };

  return (
    <Box w="100%" p={4}>
      <form ref={formData}>
        <VStack spacing={4} align="start">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              border="2px"
              borderColor={nameError ? "red" : "gray.400"}
              borderRadius="sm"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              border="2px"
              borderColor={emailError ? "red" : "gray.400"}
              borderRadius="sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
            />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              border="2px"
              borderColor={subjectError ? "red" : "gray.400"}
              borderRadius="sm"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setSubjectError(false);
              }}
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              rows={4}
              border="2px"
              borderColor={messageError ? "red" : "gray.400"}
              borderRadius="sm"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
            />
          </FormControl>
          <Button
            w="100%"
            bg="red.500"
            color="white"
            borderRadius="0"
            _hover={{ bg: "red.600" }}
            onClick={handleSubmit}
            isLoading={loading}
            loadingText="Submitting"
          >
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
