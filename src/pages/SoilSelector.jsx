import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const soilHorizons = ["https://images.unsplash.com/Oberbodenhorizont-URL", "https://images.unsplash.com/Unterbodenhorizont-URL", "https://images.unsplash.com/Untergrundhorizont-URL"];

const soilHorizonsTitles = ["Oberbodenhorizont", "Unterbodenhorizont", "Untergrundhorizont"];

import { useNavigate } from "react-router-dom";

function SoilSelector({ setSelectedSoils }) {
  const [selectedSoils, setSelectedSoilsState] = useState([]);
  const [dateTime, setDateTime] = useState(new Date().toISOString());
  const [currentSoilIndex, setCurrentSoilIndex] = useState(0);
  const [gpsPosition, setGpsPosition] = useState("");
  const currentTitle = soilHorizonsTitles[selectedSoils.length];

  // `useNavigate` import should be moved to the top of the file.

  // Define `handleAccept` function with the required logic and use `useNavigate` to redirect.
  const handleSwipe = () => {
    setCurrentSoilIndex((prevIndex) => (prevIndex + 1) % soilHorizons.length);
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

    // Redirect to the Soil Selector page after accepting the third soil horizon
    if (selectedSoils.length === 2) {
      navigate("/soil-selector");
    }
  };

  const navigate = useNavigate();

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
