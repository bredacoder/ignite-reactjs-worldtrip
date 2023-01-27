import { Box, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function CityCard() {
  return (
    <GridItem>
      <Box
        my="10"
        w="2xs"
        h="xs"
        backgroundColor="white"
        borderRadius="4px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="rgba(255, 186, 8, 0.5)"
      >
        <Image
          src="https://thumbs.dreamstime.com/b/ponte-da-torre-em-londres-reino-unido-38138737.jpg"
          w="100%"
          objectFit="cover"
          height="62%"
        />

        <Flex
          p="6"
          justifyContent="space-between"
          align="center"
        >
          <Flex
            flexDirection="column"
            gap="3"
          >
            <Heading
              fontWeight="semibold"
              fontSize="xl"
              lineHeight="base"
            >
              Londres
            </Heading>
            <Text
              fontWeight="normal"
              color="gray.400"
              fontSize="md"
              lineHeight="tall"
            >
              Reino Unido
            </Text>
          </Flex>

  
          <Image
            src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/d/bandeira-do-reino-unido.jpg"
            h="1.875rem"
            w="1.875rem"
            borderRadius="50%"
            objectFit="cover"
          />

        </Flex>
      </Box>
    </GridItem>
  )
}