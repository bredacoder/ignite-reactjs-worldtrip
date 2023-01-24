import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Infos from "./Infos";

export default function ContinentContent() {
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
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Infos />
    </Flex>
  )
}