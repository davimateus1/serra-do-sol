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
  Badge,
  Text,
  Link,
} from "@chakra-ui/react";

import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import Constelation from "../../assets/images/Constelation.svg";

import { institutionalData } from "../../data";

export const MemberComponent = () => {
  return (
    <Tabs
      colorScheme="yellow"
      variant="enclosed"
      bg="rgba.black"
      w="70%"
      h="70%"
      p="1rem"
      borderRadius="2rem"
      isFitted
      isLazy
    >
      <TabList>
        {institutionalData.map((item, index) => {
          var firstName = item.name.split(" ").shift();
          return (
            <Tab
              _selected={{ color: "white", bg: "brand.800" }}
              key={index}
              fontWeight="bold"
              color="white"
            >
              {firstName}
            </Tab>
          );
        })}
      </TabList>

      <TabPanels>
        {institutionalData.map((member, index) => (
          <TabPanel key={index}>
            <Flex w="100%" justify="space-evenly" align="center" h="50vh">
              <Accordion allowToggle w="50%" border="none">
                <AccordionItem
                  borderRadius="2rem"
                  p="1rem"
                  bg="brand.700"
                  transition="all 0.5s"
                >
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="bold" color="white" fontSize="1.2rem">
                          {member.name}
                        </Text>
                      </Box>
                      <AccordionIcon color="white" fontSize="2rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text color="brand.900">{member.description}</Text>
                    <Flex mt="1rem">
                      {member.linkedIn !== "" && (
                        <Link
                          color="brand.900"
                          fontSize="1.5rem"
                          href={member.linkedIn}
                          isExternal
                        >
                          <AiFillLinkedin />
                        </Link>
                      )}
                      <Link
                        color="brand.900"
                        fontSize="1.5rem"
                        href={`mailto:${member.email}`}
                      >
                        <HiOutlineMail />
                      </Link>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Flex
                direction="column"
                align="center"
                bg="brand.800"
                borderRadius="1rem"
                p="2rem"
                h="80%"
                w="30%"
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
                <Badge variant="solid" colorScheme="green" mt="1rem">
                  {member.office}
                </Badge>
              </Flex>
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
