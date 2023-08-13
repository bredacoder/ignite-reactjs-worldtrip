import { Container, Grid, Text } from "@chakra-ui/react";
import CityCard from "./CityCard";

interface ContinentCitiesProps {
  cities: {
    name: string;
    country: string;
    thumbnail: string;
    flagImageUrl: string;
  }[]
}

export default function ContinentCities({ cities }: ContinentCitiesProps) {
  return (
    <Container w="100%" maxW="1160" boxSizing="content-box">
      <Text
        fontSize="4xl"
        fontWeight="medium"
        lineHeight="3.375rem"
      >
        Cidades +100
      </Text>

      <Grid templateColumns='repeat(4, 1fr)' gap="10" my="10">
        {cities?.map(city => <CityCard key={city.name} city={city} />)}
      </Grid>
    </Container>
  )
}