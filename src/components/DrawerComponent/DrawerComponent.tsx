import { RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Heading,
  Text,
  Icon,
  Tooltip,
} from "@chakra-ui/react";

import SolarPanel from "../../assets/images/SolarPanel.svg";
import SunVerion from "../../assets/images/SunVersion.webp";

import { drawerData } from "../../data";
import { ButtonComponent } from "../ButtonComponent";

export const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<RefObject<HTMLButtonElement> | any>();

  const navigate = useNavigate();

  return (
    <>
      <Tooltip
        label="Menu"
        fontWeight="bold"
        placement="right"
        hasArrow
        bg="brand.800"
      >
        <Button
          ref={btnRef}
          onClick={onOpen}
          bg="brand.900"
          _hover={{
            backgroundColor: "brand.800",
          }}
          _focus={{}}
          _active={{
            backgroundColor: "brand.900",
          }}
        >
          <Icon as={AiOutlineMenu} color="brand.700" />
        </Button>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="brand.600" fontSize="1.2rem" />
          <DrawerHeader
            display="flex"
            justifyContent="center"
            boxShadow={`inset 0px -50px 16px -35px #2a69ac`}
            bgSize="cover"
            bgImage={`url(${SunVerion})`}
          >
            <Heading
              textAlign="center"
              color="brand.900"
              bg="rgba.black"
              m="2rem 2rem 3rem 2rem"
              borderRadius="1rem"
              p="0.6rem"
              fontSize="1.5rem"
            >
              Energética Serra do Sol
            </Heading>
          </DrawerHeader>

          <DrawerBody
            display="flex"
            flexDirection="column"
            bg="brand.700"
            h="50%"
            justifyContent="center"
            bgSize="3rem"
            bgRepeat="repeat"
            bgImage={`url(${SolarPanel})`}
            alignItems="center"
          >
            {drawerData.map((item) => (
              <ButtonComponent
                title={item.name}
                m="1rem"
                minH="3rem"
                borderRadius="1rem"
                action={() => {
                  navigate(item.route);
                  onClose();
                }}
              />
            ))}
          </DrawerBody>

          <DrawerFooter
            display="flex"
            justifyContent="center"
            bg="brand.800"
            boxShadow={`inset 0px 50px 16px -35px #2a69ac`}
            h="5rem"
            alignItems="center"
          >
            <Text
              textAlign="center"
              w="95%"
              color="rgba.black"
              fontWeight="bold"
              mt="1rem"
            >
              Desenvolvido por: Davi Mateus
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
