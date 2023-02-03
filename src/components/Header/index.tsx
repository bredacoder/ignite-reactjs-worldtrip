import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px","100px"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
          </Link>
        )}
          <Image
            w={["81px","184px"]}
            src="/Logo.svg"
            alt="Logo"
            justifySelf="center"
            gridColumn="2"
          />
      </Grid>
    </Flex>
  )
};

