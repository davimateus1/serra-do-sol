import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Scrollbar } from "../../assets";

import Wave from "../../assets/images/svgs/Wave.svg";
import SerraLogo from "../../assets/images/svgs/SerraLogo.svg";
import { ButtonComponent } from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

export const ErrorComponent = () => {
  const navigate = useNavigate();

  return (
    <Flex
      bg="brand.900"
      w="100vw"
      h="100vh"
      bgImage={`url(${Wave})`}
      bgSize="13rem"
      bgRepeat="repeat"
      alignItems="center"
      direction="column"
      overflowX="hidden"
      justify="center"
      sx={{ ...Scrollbar }}
    >
      <Image src={SerraLogo} w="35rem" position="absolute" />
      <Flex
        direction="column"
        position="relative"
        top="3rem"
        textAlign="center"
      >
        <Heading fontSize="5rem">ERRO 404:</Heading>
        <Text fontSize="2rem">Página não encontrada</Text>
      </Flex>
      <ButtonComponent
        title="Voltar ao Menu"
        position="relative"
        top="7rem"
        action={() => navigate("/")}
      />
    </Flex>
  );
};
