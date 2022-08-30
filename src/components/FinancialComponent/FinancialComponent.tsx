import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavbarComponent } from "../NavbarComponent";
import { FooterComponent } from "../FooterComponent";

import { Scrollbar } from "../../assets";

import Wave from "../../assets/images/svgs/Wave.svg";

import SinglePagePDF from "./SinglePagePDF";
import { SerraDoSol64 } from "../../data/pdfs/Base64";
import { fontStyle } from "../../styles";

export const FinancialComponent = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <NavbarComponent />
      <Flex
        bg="brand.900"
        w="100%"
        h="95vh"
        bgImage={`url(${Wave})`}
        bgSize="13rem"
        bgRepeat="repeat"
        alignItems="center"
        direction="column"
        overflowX="hidden"
        sx={{ ...Scrollbar }}
      >
        <Heading w={fontStyle} mt="2.5rem">
          FINANCEIRO
        </Heading>
        <Text
          w={fontStyle}
          fontStyle="italic"
          mb="0.7rem"
          textAlign="center"
          fontWeight="bold"
        >
          Demonstrações financeiras 2019, 2020 e 2021
        </Text>
        <SinglePagePDF pdf={SerraDoSol64} />
      </Flex>
      <FooterComponent />
    </Flex>
  );
};
