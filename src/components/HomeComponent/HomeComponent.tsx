import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import SolarPanel from "../../assets/images/SolarPanel.svg";
import SerraLogo from "../../assets/images/SerraLogo.svg";
import UfvPhoto from "../../assets/images/UfvPhoto.jpg";
import { homeData } from "../../data";
import { useNavigate } from "react-router-dom";

export const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh">
      <Flex
        w="55vw"
        h="100vh"
        bgImage={`url(${SolarPanel})`}
        justifyContent="center"
        alignItems="center"
        bgColor="brand.700"
        flexDirection="column"
        bgSize="5rem"
        bgRepeat="repeat"
      >
        <Flex
          bg="rgba.black"
          w="50%"
          h="auto"
          minH="50%"
          borderRadius="2rem"
          m="1rem"
          direction="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Image src={SerraLogo} w="18rem" h="18rem" />
          <Heading textAlign="center" w="90%" color="brand.900">
            Energética Serra do Sol
          </Heading>
        </Flex>
      </Flex>
      <Flex
        display="flex"
        w="45vw"
        h="100vh"
        bgImage={`url(${UfvPhoto})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {homeData.map((item) => (
          <Button
            w="15rem"
            minH="4rem"
            bg="brand.800"
            color="white"
            fontSize="1.2rem"
            fontWeight="bold"
            letterSpacing={0.32}
            borderRadius="2rem"
            transition="all 0.5s"
            m="1.5rem"
            _hover={{
              backgroundColor: "brand.900",
              boxShadow: "0px 10px 20px #000000",
            }}
            _focus={{}}
            _active={{
              backgroundColor: "brand.900",
            }}
            boxShadow="0px 10px 20px brand.900"
            onClick={() => navigate(item.route)}
          >
            {item.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
