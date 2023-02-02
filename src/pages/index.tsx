import Head from "next/head";
import { GetStaticProps } from "next";
import { Divider, Text } from "@chakra-ui/react";

import Slider from "../components/Slider";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

import { api } from "../services/api";
import { ContinentData } from "../interfaces/Continent";

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
        <link rel="shortcut icon" href="/favicon.png" />
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

      <Slider continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<ContinentData[]>('continents');

  const continents = response.data.map(continent => ({
    slug: continent.id,
    title: continent.title,
    summary: continent.summary,
    image: continent.slider_image_url
  }));

  return {
    props: {
      continents
    }
  }
}
