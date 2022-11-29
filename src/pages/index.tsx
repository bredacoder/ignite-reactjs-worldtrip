import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

const TravelTypes = [
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

export default function Home() {
  return (
    <>
      <Header />

      <Box 
        bgImage="url('BackgroundBanner.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={["163", "335"]}
        w="100vw"
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

      <Flex
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
          {TravelTypes.map(travelType => (
            <Flex direction="column" align="center" gap={["2", "4", "6"]}>
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
        
      </Flex>
    </>
  )
}
