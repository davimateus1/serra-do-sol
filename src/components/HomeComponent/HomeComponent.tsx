import { Flex, Heading, Image } from "@chakra-ui/react";

import SolarPanel from "../../assets/images/svgs/SolarPanel.svg";
import SerraLogo from "../../assets/images/svgs/SerraLogo.svg";
import UfvPhoto from "../../assets/images/others/UfvPhoto.jpg";

import { homeData } from "../../data";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../ButtonComponent";

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
          <ButtonComponent
            title={item.name}
            action={() => navigate(item.route)}
          />
        ))}
      </Flex>
    </Flex>
  );
};
