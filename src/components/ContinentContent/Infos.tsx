import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface InfosProps {
  infos: {
    countries: number;
    languages: number;
    cities: number;
  }
}

export default function Infos({ infos: { countries, languages, cities } }: InfosProps) {
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

          <Image
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            right="-30px"
            src="/Info.svg"
          />
        </Text>
      </Box>
  </Flex>
  );
}