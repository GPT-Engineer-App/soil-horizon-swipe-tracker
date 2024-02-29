import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Flex as="nav" bg="teal.500" padding="1.5rem" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/create-account" color="white">
          Create Account
        </Link>
        <Link as={RouterLink} to="/profile" ml="4" color="white">
          Profile
        </Link>
      </Box>
    </Flex>
  );
}

export default Navigation;
