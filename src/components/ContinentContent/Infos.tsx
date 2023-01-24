import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Infos() {
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
          50
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
          60
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
          27
        </Heading>
        <Text
          fontWeight="600"
          fontSize="2xl"
          lineHeight="9"
          color="gray.600"
        >
          cidades +100
        </Text>
      </Box>
  </Flex>
  );
}