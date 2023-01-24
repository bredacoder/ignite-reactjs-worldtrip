import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    
  <Box 
    bgImage="url('/BackgroundBanner.svg')"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    h={["163", "335"]}
    w="100%"
  >
    <Flex 
      position="relative"
      justifyContent="space-between"
      align="center"
      mx="auto"
      h="100%"
      maxW="1160"
      px={["4", "6"]}
    >
      <Box>
        <Text 
          fontSize={["xl", "4xl"]}
          fontWeight="500" 
          color="gray.100"
        >
          5 Continentes,
        </Text>
        <Text
          fontSize={["xl", "4xl"]}
          fontWeight="500"
          color="gray.100"
        >
          infinitas possibilidades
        </Text>
  
        <Text
          fontSize={{
            base: "sm",
            sm: "xl",
          }}
          fontWeight="400"
          color="gray.200"
          mt="5" 
          maxW="32.75rem"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Box>

      <Image
        position="absolute"
        right="0"
        bottom={{
          base: "60%",
          sm: "-11",
          md: "-12",
          lg: "-10"
        }}
        zIndex="1"
        h={{
          base: "60px",
          sm: "120px",
          md: "240px",
          lg: "300px"
        }}
        src="Airplane.svg"
        alt="Airplane"
      />
   
    </Flex>
  </Box>
  );
}