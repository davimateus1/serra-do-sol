import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import SolarPanel from "../../assets/images/svgs/SolarPanel.svg";
import SerraLogo from "../../assets/images/svgs/SerraLogo.svg";
import UfvPhoto from "../../assets/images/others/UfvPhoto.jpg";

import { homeData } from "../../data";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../ButtonComponent";
import { fontStyle } from "../../styles";

export const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh">
      <Box
        display={{
          base: "flex",
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
        }}
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
        <Box
          display={{
            base: "flex",
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
          }}
          bg="rgba.black"
          w="50%"
          h="auto"
          minH="50%"
          borderRadius="2rem"
          m="1rem"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Image src={SerraLogo} w="18rem" h="18rem" />
          <Heading textAlign="center" w={fontStyle} color="brand.900">
            Energética Serra do Sol
          </Heading>
        </Box>
      </Box>
      <Flex
        w={{
          base: "45vw",
          xl: "45vw",
          lg: "45vw",
          md: "100%",
          sm: "100%",
        }}
        h="100vh"
        bgImage={`url(${UfvPhoto})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          bg="rgba.black"
          p="1rem"
          borderRadius="2rem"
          w={{
            sm: "fontSizes.sm",
          }}
          display={{
            base: "none",
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
          }}
          color="brand.900"
        >
          Energética Serra do Sol
        </Heading>
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
