import { FormControl, FormLabel, Input, Button, VStack, Heading } from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = () => {
    // Simulate authentication logic
    setIsAuthenticated(true);
    // Redirect to home or dashboard after successful authentication
    navigate("/dashboard"); // Assuming '/dashboard' is the path for the authenticated user's dashboard
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
        <Input placeholder="Enter your email" type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Enter your password" type="password" />
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input placeholder="Confirm your password" type="password" />
      </FormControl>
      <Button colorScheme="teal" width="full" mt={4} onClick={() => authenticate()}>
        Create Account
      </Button>
    </VStack>
  );
}
