import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";

interface InfosProps {
  infos: {
    countries: number;
    languages: number;
    cities: number;
    mostFamousCities: string;
  }
}

export default function Infos({ infos: { countries, languages, cities, mostFamousCities } }: InfosProps) {
  return (
    <Flex
      w="lg"
      justifyContent="center"
      gap="12"
    >
      <Box textAlign="center">
        <Heading
          color="yellow.300"
          fontSize="5xl"
          fontWeight="600"
        >
          {countries}
        </Heading>
        <Text
          fontWeight="600"
          fontSize="2xl"
          lineHeight="9"
          color="gray.600"
        >
          países
        </Text>
      </Box>

      <Box textAlign="center"> 
        <Heading
          color="yellow.300"
          fontSize="5xl"
          fontWeight="600"
        >
          {languages}
        </Heading>
        <Text
          fontWeight="600"
          fontSize="2xl"
          lineHeight="9"
          color="gray.600"
        >
          línguas
        </Text>
      </Box>

      <Box textAlign="center">
        <Heading
          color="yellow.300"
          fontSize="5xl"
          fontWeight="600"
        >
          {cities}
        </Heading>
        <Text
          position="relative"
          fontWeight="600"
          fontSize="2xl"
          lineHeight="9"
          color="gray.600"
        >
          cidades +100

          <Tooltip hasArrow label={mostFamousCities} bg="yellow.300">
            <Image
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              right="-30px"
              src="/Info.svg"
            />
          </Tooltip>
          
        </Text>
      </Box>
  </Flex>
  );
}