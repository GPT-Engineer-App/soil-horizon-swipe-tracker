import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const soilHorizons = ["https://images.unsplash.com/Oberbodenhorizont-URL", "https://images.unsplash.com/Unterbodenhorizont-URL", "https://images.unsplash.com/Untergrundhorizont-URL"];

const soilHorizonsTitles = ["Oberbodenhorizont", "Unterbodenhorizont", "Untergrundhorizont"];

function SoilSelector({ setSelectedSoils }) {
  const [selectedSoils, setSelectedSoilsState] = useState([]);
  const [dateTime, setDateTime] = useState(new Date().toISOString());
  const [currentSoilIndex, setCurrentSoilIndex] = useState(0);
  const [gpsPosition, setGpsPosition] = useState("");
  const currentTitle = soilHorizonsTitles[selectedSoils.length];

  const handleSwipe = () => {
    const nextIndex = (currentSoilIndex + 1) % soilHorizons.length;
    setCurrentSoilIndex(nextIndex);
  };

  const handleAccept = () => {
    if (selectedSoils.length < 3) {
      setSelectedSoilsState((prevSelectedSoils) => [
        ...prevSelectedSoils,
        {
          imageUrl: soilHorizons[currentSoilIndex],
          gps: gpsPosition,
          timestamp: dateTime,
        },
      ]);
      setDateTime(new Date().toISOString()); // Update the dateTime state to the current date and time in ISO format
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
}

export default SoilSelector;
