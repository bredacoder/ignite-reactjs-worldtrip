import { Box, SimpleGrid } from "@chakra-ui/react";
import { travelTypesInfo } from "./TravelTypesInfo";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Box
      w="100%"
      maxW="1160"
      mx="auto"
    >
      <SimpleGrid
        mt={["9", "14", "28"]}
        minChildWidth={["170px", "200px"]}
        spacing={["4", "6"]} 
        w="100%"
      >
        {travelTypesInfo.map(travelType => (
          <TravelType key={travelType.description} text={travelType.description} icon={travelType.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
}