import { Image } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Continent() {
  return (
    <>
      <Header />

      <Image h="500" w="100vw" objectFit="cover" src="Europe.svg" alt="Europe" />

    </>
  )
}
