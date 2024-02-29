import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Divider, VStack } from "@chakra-ui/react";

function SoilLibrary({ selectedSoils }) {
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" mb="4">
          Soil Library
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Gebiet</Th>
              <Th>GPS</Th>
              <Th>Oberboden</Th>
              <Th>Unterboden</Th>
              <Th>Untergrund</Th>
              <Th>Datum</Th>
              <Th>Zeit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedSoils.length ? (
              selectedSoils.map((soil, idx) => {
                const dateTimeSplit = soil.timestamp.split("T");
                const date = dateTimeSplit[0];
                const time = dateTimeSplit[1].split(".")[0];
                return (
                  <Tr key={idx}>
                    <Td>{soil.gps}</Td>
                    <Td>{soil.gps}</Td>
                    <Td>---</Td>
                    <Td>---</Td>
                    <Td>---</Td>
                    <Td>{date}</Td>
                    <Td>{time}</Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td>---</Td>
                <Td>---</Td>
                <Td>---</Td>
                <Td>---</Td>
                <Td>---</Td>
                <Td>---</Td>
                <Td>---</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
}

export default SoilLibrary;
