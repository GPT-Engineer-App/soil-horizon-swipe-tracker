import React from "react";
import { Box, Text, VStack, Heading, Divider } from "@chakra-ui/react";

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
          .map(([gps, soils], index) => (
            <Box key={gps}>
              {index > 0 && <Divider my={4} />}
              <Heading fontSize="lg" mb={2}>
                GPS: {gps}
              </Heading>
              <VStack>
                {soils.map((soil, idx) => (
                  <Box key={idx} p={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Text>Soil Image URL: {soil.imageUrl}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          ))}
      </VStack>
    </Box>
  );
}

export default SoilLibrary;
