import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const soilHorizons = [
  "https://images.unsplash.com/Oberbodenhorizont-URL", // Replace with actual URL for Oberbodenhorizont
  "https://images.unsplash.com/Unterbodenhorizont-URL", // Replace with actual URL for Unterbodenhorizont
  "https://images.unsplash.com/Untergrundhorizont-URL", // Replace with actual URL for Untergrundhorizont
];

const soilHorizonsTitles = ["Oberbodenhorizont", "Unterbodenhorizont", "Untergrundhorizont"];

// Removing the import of date-fns as it is not available

const Index = () => {
  const [selectedSoils, setSelectedSoils] = useState([]);
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
      setSelectedSoils((prevSelectedSoils) => [
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
      navigate("/");
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
};

export default Index;
