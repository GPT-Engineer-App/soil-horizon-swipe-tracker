import { FormControl, FormLabel, Input, Button, VStack, Heading } from "@chakra-ui/react";

export default function CreateAccount() {
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
      <Button colorScheme="teal" width="full" mt={4}>
        Create Account
      </Button>
    </VStack>
  );
}
