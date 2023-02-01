import { Box, Container, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  image: string;
  title: string;
}

export default function ContinentBanner({ image, title } : ContinentBannerProps) {
  return (
    <Box 
    bgImage={`url('${image}')`}
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
        left="0"
        color="gray.100"
        fontSize={["1.75rem","5xl"]}
        fontWeight="600"
        lineHeight="72px"
      >
        {title}
      </Heading>
    </Container>
  </Box>

  )
}