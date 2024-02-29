import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
  const [gpsPosition, setGpsPosition] = useState("");

  const handleSwipe = () => {
    const nextIndex = (currentSoilIndex + 1) % soilHorizons.length;
    setCurrentSoilIndex(nextIndex);
  };

  const handleAccept = () => {
    if (selectedSoils.length < 3) {
      setSelectedSoils([
        ...selectedSoils,
        {
          imageUrl: soilHorizons[currentSoilIndex],
          gps: gpsPosition,
        },
      ]);
      handleSwipe(); // Automatically swipe to the next soil after accepting
    }
    // After selecting 3 soils, the soil data along with GPS information is now being stored.
  };

  return (
    <VStack spacing={8} p={4}>
      <Text fontSize="2xl">Soil Horizon Selector</Text>
      <Box boxSize="sm">
        <Image src={soilHorizons[currentSoilIndex]} alt="Soil Horizon" />
      </Box>
      <FormControl id="gps-position">
        <FormLabel>GPS Position</FormLabel>
        <Input placeholder="Enter your GPS position" value={gpsPosition} onChange={(e) => setGpsPosition(e.target.value)} type="text" />
      </FormControl>
      <Flex justify="center" gap={4}>
        <Button leftIcon={<FaArrowRight />} colorScheme="teal" onClick={handleSwipe}>
          Swipe
        </Button>
        <Button leftIcon={<FaCheck />} colorScheme="green" onClick={handleAccept} isDisabled={selectedSoils.length >= 3 || !gpsPosition}>
          Accept
        </Button>
      </Flex>
      {selectedSoils.length >= 3 && <Text>You have selected {selectedSoils.length} soil types. Thank you!</Text>}
    </VStack>
  );
};

export default Index;
