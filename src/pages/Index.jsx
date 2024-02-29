import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const soilHorizons = [
  "https://images.unsplash.com/Oberbodenhorizont-URL", // Replace with actual URL for Oberbodenhorizont
  "https://images.unsplash.com/Unterbodenhorizont-URL", // Replace with actual URL for Unterbodenhorizont
  "https://images.unsplash.com/Untergrundhorizont-URL", // Replace with actual URL for Untergrundhorizont
];

const soilHorizonsTitles = ["Oberbodenhorizont", "Unterbodenhorizont", "Untergrundhorizont"];

const Index = () => {
  const [selectedSoils, setSelectedSoils] = useState([]);
  const [currentSoilIndex, setCurrentSoilIndex] = useState(0);
  const [gpsPosition, setGpsPosition] = useState("");
  const currentTitle = soilHorizonsTitles[selectedSoils.length];

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
      {selectedSoils.length >= 1 && <Text fontSize="lg">{currentTitle}</Text>}
    </VStack>
  );
};

export default Index;
