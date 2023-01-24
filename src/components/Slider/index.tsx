import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Link from "next/link";

export default function Slider() {
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
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={`url('/Continent.svg')`}
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/europa">
              <Heading
                fontSize={["3xl","4xl","5xl"]}
                color="gray.100"
                fontWeight="bold"
              >
                Europa
              </Heading>
             <Text
                fontWeight="bold"
                color="gray.300"
                fontSize={["0.8rem","1xl","2xl"]}
                mt={["2","4"]}
              >
                O continente mais antigo.
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
