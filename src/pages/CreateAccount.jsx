import { FormControl, FormLabel, Input, Button, VStack, Heading, useToast } from "@chakra-ui/react";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const existingEmails = ["user@example.com", "admin@example.com"]; // Simulated existing emails
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const emailRef = useRef();

  const authenticate = (userEmail) => {
    if (existingEmails.includes(userEmail)) {
      toast({
        title: "Account creation failed.",
        description: "The email address is already in use.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Simulate authentication logic
      setIsAuthenticated(true);
      // Redirect to home after successful authentication
      navigate("/"); // Redirect to the homepage
    }
  };
  return (
    <VStack spacing={4} p={4}>
      <Heading>Create an Account</Heading>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter your name" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Enter your password" type="password" />
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input placeholder="Confirm your password" type="password" />
      </FormControl>
      <Button colorScheme="teal" width="full" mt={4} onClick={() => authenticate(emailRef.current.value)}>
        Create Account
      </Button>
    </VStack>
  );
}
