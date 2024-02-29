import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function SoilLibrary({ selectedSoils }) {
  return (
    <Box>
      <Text fontSize="2xl" mb="4">Soil Library</Text>
      {/* Here would be the component logic to display the selected soils */}
    </Box>
  );
}

export default SoilLibrary;