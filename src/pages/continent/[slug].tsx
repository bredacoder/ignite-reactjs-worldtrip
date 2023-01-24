import Head from "next/head";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <>
      <Head>
        <title>WorldTrip - Europa</title>
      </Head>

      <Header />  

      <ContinentBanner />

      <ContinentContent />
    </>
  )
}
