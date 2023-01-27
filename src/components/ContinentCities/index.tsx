import { Container, Flex, Grid, Text } from "@chakra-ui/react"
import CityCard from "./CityCard"

export default function ContinentCities() {
  return (
    <Container w="100%" maxW="1160" boxSizing="content-box">
      <Text
        fontSize="4xl"
        fontWeight="medium"
        lineHeight="3.375rem"
      >
        Cidades +100
      </Text>

      <Grid templateColumns='repeat(4, 1fr)' gap="10">
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </Grid>
    </Container>
  )
}