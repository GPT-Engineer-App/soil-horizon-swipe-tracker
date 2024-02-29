import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Divider, VStack } from "@chakra-ui/react";

function SoilLibrary({ selectedSoils }) {
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" mb="4">
          Soil Library
        </Heading>
        {selectedSoils
          .reduce((acc, { imageUrl, gps }) => {
            if (!acc[gps]) acc[gps] = [];
            acc[gps].push({ imageUrl, gps });
            return acc;
          }, {})
          .map(([gps, soils], index) => {
            return (
              <Table key={gps} variant="simple">
                {index === 0 && (
                  <Thead>
                    <Tr>
                      <Th>Soil Image URL</Th>
                      <Th>GPS Position</Th>
                      <Th>Date and Time</Th>
                    </Tr>
                  </Thead>
                )}
                <Tbody>
                  {soils.map((soil, idx) => (
                    <Tr key={idx}>
                      <Td>{soil.imageUrl}</Td>
                      <Td>{gps}</Td>
                      <Td>{soil.timestamp}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            );
          })}
      </VStack>
    </Box>
  );
}

export default SoilLibrary;
