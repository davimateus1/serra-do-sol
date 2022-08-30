import { Flex, Heading, Image } from "@chakra-ui/react";

import SerraLogo from "../../assets/images/svgs/SerraLogo.svg";
export const FooterComponent = () => {
  return (
    <Flex
      bg="brand.700"
      w="100%"
      h="6vh"
      alignItems="center"
      justifyContent="center"
      p="2rem"
      direction="column"
    >
      <Image src={SerraLogo} w="2rem" />
      <Heading textAlign="center" w="100%" color="brand.900" fontSize="md">
        Todos os direitos reservados &copy;
      </Heading>
    </Flex>
  );
};
