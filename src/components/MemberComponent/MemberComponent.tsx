import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Scrollbar } from "../../assets";

import Constelation from "../../assets/images/svgs/Constelation.svg";

import { institutionalData } from "../../data";
import {
  displayInstitutionStyle,
  directionStyle,
  fontStyle,
} from "../../styles";

export const MemberComponent = () => {
  return (
    <Tabs
      colorScheme="yellow"
      variant="enclosed"
      bg="rgba.black"
      w={displayInstitutionStyle}
      h={{ base: "70%", xl: "70%", lg: "70%", md: "70%", sm: "auto" }}
      p="1rem"
      borderRadius="2rem"
      isFitted
      isLazy
    >
      <TabList
        overflow="auto hidden"
        sx={{ ...Scrollbar }}
        p={{ base: "0", xl: "0", lg: "0", md: "0", sm: "0.5rem" }}
      >
        {institutionalData.map((item, index) => {
          var firstName = item.name.split(" ").shift();
          return (
            <Tab
              _selected={{ color: "white", bg: "brand.800" }}
              key={index}
              fontWeight="bold"
              color="white"
              w="100%"
              fontSize={fontStyle}
            >
              {firstName}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {institutionalData.map((member, index) => (
          <TabPanel key={index}>
            <Box
              display="flex"
              w="100%"
              justifyContent="space-evenly"
              alignItems="center"
              flexDirection={directionStyle}
              h={{
                base: "50vh",
                xl: "50vh",
                lg: "50vh",
                md: "50vh",
                sm: "auto",
              }}
            >
              <Accordion
                allowToggle
                w={{
                  base: "50%",
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                }}
                border="none"
              >
                <AccordionItem
                  borderRadius="2rem"
                  p="1rem"
                  bg="brand.700"
                  transition="all 0.5s"
                >
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold" color="white" fontSize="xl">
                        {member.name}
                      </Text>
                    </Box>
                    <AccordionIcon color="white" fontSize="4xl" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="brand.900">{member.description}</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Flex
                direction="column"
                align="center"
                bg="brand.800"
                borderRadius="1rem"
                p="2rem"
                h={{
                  base: "80%",
                  xl: "80%",
                  lg: "80%",
                  md: "80%",
                  sm: "70%",
                }}
                w={{
                  base: "30%",
                  xl: "30%",
                  lg: "30%",
                  md: "30%",
                  sm: "100%",
                }}
                mt={{
                  base: "0",
                  xl: "0",
                  lg: "0",
                  md: "0",
                  sm: "2rem",
                }}
                justify="center"
                bgImage={`url(${Constelation})`}
                bgSize="25rem"
                bgRepeat="repeat"
              >
                <Image
                  borderRadius="full"
                  boxSize="50%"
                  w="auto"
                  h="100%"
                  src={member.image}
                  alt={member.name}
                  objectFit="cover"
                />
                <Flex mt="1rem">
                  {member.linkedIn !== "" && (
                    <Link
                      color="brand.700"
                      fontSize="4xl"
                      href={member.linkedIn}
                      isExternal
                    >
                      <AiFillLinkedin />
                    </Link>
                  )}
                  <Link
                    color="brand.700"
                    fontSize="4xl"
                    href={`mailto:${member.email}`}
                  >
                    <HiOutlineMail />
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
