import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1160"
      h={["10", "20"]}
      justify="center"
      align="center"
      mx="auto"
    >
      <Image src="Logo.svg" alt="Logo" h={["5", "10"]} />
    </Flex>
  )
};

