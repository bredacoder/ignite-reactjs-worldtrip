import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Link from "next/link";

interface SliderProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Box
      h="450px"
      maxWidth="1240px"
      w="100%"
      mx="auto"
      mb="40px"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {continents.map(continent => (
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <Heading
                  fontSize={["3xl","4xl","5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  {continent.title}
                </Heading>
              <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem","1xl","2xl"]}
                  mt={["2","4"]}
                >
                  {continent.summary}
                </Text>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
