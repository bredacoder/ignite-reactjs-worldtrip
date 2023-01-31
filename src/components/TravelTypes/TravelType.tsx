import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  text: string;
  icon: string;
}

export function TravelType({ text, icon  }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center" gap={["2", "4", "6"]}>
      <Image
        width={["30px", "60px", "85px"]}
        height={["30px", "60px", "85px"]}
        src={`/TravelTypes/${icon}.svg`}
        alt={text}
      />
      <Text
        fontWeight="600"
        fontSize={["lg", "xl", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  )
}