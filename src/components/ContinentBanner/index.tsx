import { Box, Container, Heading } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Box 
    bgImage="url('Europe.svg')"
    h="500" 
    w="100%"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Container
      maxW="1160"
      height="100%"
      position="relative"
    >
      <Heading
        position="absolute"
        bottom="59px"
        color="gray.100"
        fontSize={["1.75rem","5xl"]}
        fontWeight="600"
        lineHeight="72px"
      >
        Europa
      </Heading>
    </Container>
  </Box>

  )
}