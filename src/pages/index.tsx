import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Box 
        bgImage="url('BackgroundBanner.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="335"
        w="100vw"
      >
        <Flex 
          position="relative"
          justifyContent="space-between"
          align="center"
          mx="auto"
          h="100%"
          maxW="1160"
        >
          <Box>
            <Text 
              fontSize="4xl" 
              fontWeight="500" 
              color="gray.100"
            >
              5 Continentes,
            </Text>
            <Text
              fontSize="4xl"
              fontWeight="500"
              color="gray.100"
            >
              infinitas possibilidades
            </Text>
      
            <Text
              fontSize="xl"
              fontWeight="400"
              color="gray.200"
              mt="5" maxW="32.75rem"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>

          <Image
            position="absolute"
            right="0"
            bottom="-10"
            zIndex="1"
            h="300"
            src="Airplane.svg"
            alt="Airplane"
          />
       
        </Flex>
      </Box>
    </>
  )
}
