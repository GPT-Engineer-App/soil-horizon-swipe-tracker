import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from "@chakra-ui/react";

function Profile() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Profile Page</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email" type="email" />
        </FormControl>
        <Button colorScheme="teal" width="full" mt={4}>
          Update Profile
        </Button>
      </VStack>
    </Box>
  );
}

export default Profile;
