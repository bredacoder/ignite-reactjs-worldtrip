import { Divider, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import Slider from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />
        
      <Divider
        borderBottomColor="gray.600"
        mx="auto"
        mt={["14",
        "16","20"]}
        w="90px"
        borderBottomWidth="2px"
      />

      <Text
        marginY={["8", "10", "14"]}
        textAlign="center"
        fontWeight="500"
        fontSize={["xl", "2xl", "4xl"]}
      >
        Vamos nessa? <br /> 
        Então escolha seu continente
      </Text>

      <Slider />
    </>
  )
}
