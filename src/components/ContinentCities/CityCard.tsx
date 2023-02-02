import { Box, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: {
    name: string;
    country: string;
    thumbnail: string;
    flagImageUrl: string;
  }
}

export default function CityCard({ city: { name, country, thumbnail, flagImageUrl } }: CityCardProps) {
  return (
    <GridItem
      w="2xs"
      h="xs"
      backgroundColor="white"
      borderRadius="4px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="rgba(255, 186, 8, 0.5)"
    >
      <Image
        src={thumbnail}
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
            {name}
          </Heading>
          <Text
            fontWeight="normal"
            color="gray.400"
            fontSize="md"
            lineHeight="tall"
          >
            {country}
          </Text>
        </Flex>

        <Image
          src={flagImageUrl}
          h="1.875rem"
          w="1.875rem"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </GridItem>
  )
}