import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentCities from "../../components/ContinentCities";
import ContinentContent from "../../components/ContinentContent";
import { Header } from "../../components/Header";
import { ContinentData } from "../../interfaces/Continent";
import { api } from "../../services/api";

interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    image: string;
    countries: number;
    languages: number;
    citiesInfo: number;
    mostFamousCities: string;
    cities: {
      name: string;
      country: string;
      thumbnail: string;
      flagImageUrl: string;
    }[]
  }
}

export default function Continent({ continent }: ContinentProps) {

  return (
    <>
      <Head>
        <title>WorldTrip - Europa</title>
      </Head>

      <Header />  

      <ContinentBanner image={continent?.image} title={continent?.title}  />

      <ContinentContent
        description={continent?.description}
        infos={{
          countries: continent?.countries,
          languages: continent?.languages,
          cities: continent?.citiesInfo,
          mostFamousCities: continent?.mostFamousCities
        }}
      />

      <ContinentCities cities={continent.cities} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<ContinentData[]>('continents');

  const paths = response.data.map(continent => {
    return {
      params: {
        slug: continent.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get<ContinentData>(`continents/${params?.slug}`)

  const continent = {
    slug: data.id,
    title: data.title,
    description: data.description,
    image: data.banner_image_url,
    countries: data.countries,
    languages: data.languages,
    citiesInfo: data.cities_info,
    mostFamousCities: data.most_famous_cities,
    cities: data.cities_list.map(city => ({
      ...city,
      flagImageUrl: city.flag_image_url
    }))
  };

  return {
    props: {
      continent
    }
  }
}
