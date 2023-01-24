import { Divider, Text } from "@chakra-ui/react";
import Head from "next/head";
import Slider from "../components/Slider";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

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
