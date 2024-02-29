import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const soilHorizons = [
  "https://images.unsplash.com/photo-1645476627692-10aadb24fcb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaG9yaXpvbiUyMEF8ZW58MHx8fHwxNzA5MTY2MzMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/36/X7L5hgFXQZazzPaK3goC_14084990857_88cabf3b6d_o.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaG9yaXpvbiUyMEJ8ZW58MHx8fHwxNzA5MTY2MzMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaG9yaXpvbiUyMEN8ZW58MHx8fHwxNzA5MTY2MzMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  // ...add more soil horizon images
];

const Index = () => {
  const [selectedSoils, setSelectedSoils] = useState([]);
  const [currentSoilIndex, setCurrentSoilIndex] = useState(0);

  const handleSwipe = () => {
    const nextIndex = (currentSoilIndex + 1) % soilHorizons.length;
    setCurrentSoilIndex(nextIndex);
  };

  const handleAccept = () => {
    if (selectedSoils.length < 3) {
      setSelectedSoils([...selectedSoils, soilHorizons[currentSoilIndex]]);
      handleSwipe(); // Automatically swipe to the next soil after accepting
    }
    // TODO: After selecting 3 soils, send the data to an SQL database with GPS location
  };

  return (
    <VStack spacing={8} p={4}>
      <Text fontSize="2xl">Soil Horizon Selector</Text>
      <Box boxSize="sm">
        <Image src={soilHorizons[currentSoilIndex]} alt="Soil Horizon" />
      </Box>
      <Flex justify="center" gap={4}>
        <Button leftIcon={<FaArrowRight />} colorScheme="teal" onClick={handleSwipe}>
          Swipe
        </Button>
        <Button leftIcon={<FaCheck />} colorScheme="green" onClick={handleAccept} isDisabled={selectedSoils.length >= 3}>
          Accept
        </Button>
      </Flex>
      {selectedSoils.length >= 3 && <Text>You have selected {selectedSoils.length} soil types. Thank you!</Text>}
    </VStack>
  );
};

export default Index;
