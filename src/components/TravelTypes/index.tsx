import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

const travelTypesInfo = [
  {
    image: 'TravelTypes/Cocktail.svg',
    description: 'vida noturna'
  },
  {
    image: 'TravelTypes/Surf.svg',
    description: 'praia'
  },
  {
    image: 'TravelTypes/Building.svg',
    description: 'moderno'
  },
  {
    image: 'TravelTypes/Museum.svg',
    description: 'clássico'
  },
  {
    image: 'TravelTypes/Earth.svg',
    description: 'e mais...'
  },
];

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
          <Flex key={travelType.description}  direction="column" align="center" gap={["2", "4", "6"]}>
            <Image
              width={["30px", "60px", "85px"]}
              height={["30px", "60px", "85px"]}
              src={travelType.image}
              alt={travelType.description}
            />
            <Text
              fontWeight="600"
              fontSize={["lg", "xl", "2xl"]}
            >
              {travelType.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}