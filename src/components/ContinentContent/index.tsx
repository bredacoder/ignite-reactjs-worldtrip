import { Flex, Text } from "@chakra-ui/react";
import Infos from "./Infos";

interface ContinentContentProps {
  description: string;
  infos: {
    countries: number;
    languages: number;
    cities: number;
    mostFamousCities: string;
  }
}

export default function ContinentContent({ description, infos } : ContinentContentProps) {
  return (
    <Flex
      my="20"
      maxW="1160"
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
    >
      <Text
        fontWeight="normal"
        fontSize="2xl"
        lineHeight="9"
        align="justify"
        color="gray.600"
        w="37.5rem"
      >
        {description}
      </Text>

      <Infos infos={infos} />
    </Flex>
  )
}