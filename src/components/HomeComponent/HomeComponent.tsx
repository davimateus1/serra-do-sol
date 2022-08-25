import { Box, Button, Flex } from "@chakra-ui/react";
import SolarPanel from "../../assets/images/SolarPanel.svg";

export const HomeComponent = () => {
  return (
    <Flex w="100vw" h="100vh">
      <Box
        display="flex"
        w="55vw"
        h="100vh"
        bgColor="brand.900"
        bgImage={`url(${SolarPanel})`}
        bgSize="5rem"
        bgPosition="center"
        bgRepeat="repeat"
        justifyContent="center"
        alignItems="center"
      >
        <Flex bg="red" w="20rem" h="20rem" borderRadius="2rem"   m="1rem"></Flex>
      </Box>
      <Box
        display="flex"
        w="45vw"
        h="100vh"
        bg="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button>
          Teste
        </Button>
        <Button>
          Teste
        </Button>
        <Button>
          Teste
        </Button>
      </Box>
    </Flex>
  );
};
