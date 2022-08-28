import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavbarComponent } from "../NavbarComponent";

import Wave from "../../assets/images/svgs/Wave.svg";

import { Scrollbar } from "../../assets";
import SinglePagePDF from "./SinglePagePDF";
import { SerraDoSol64 } from "../../data/pdfs/Base64";

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
        <Heading fontSize="3rem" mt="2.5rem">
          FINANCEIRO
        </Heading>
        <Text fontSize="1.5rem" fontStyle="italic" mb="0.7rem">
          Demonstrações financeiras 2019, 2020 e 2021
        </Text>
        <SinglePagePDF pdf={SerraDoSol64} />
      </Flex>
    </Flex>
  );
};
