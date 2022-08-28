import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Text,
  AccordionPanel,
  AccordionIcon,
  Image,
  List,
  ListItem,
  ListIcon,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { BsFillCheckCircleFill } from "react-icons/bs";

import Total from "../../assets/images/projects/Total.png";
import Locale from "../../assets/images/projects/Locale.png";
import Locations from "../../assets/images/projects/Locations.png";
import Route from "../../assets/images/projects/Route.png";
import ReferencePoint from "../../assets/images/projects/ReferencePoint.png";
import Declive from "../../assets/images/projects/Declive.png";
import Altimetric from "../../assets/images/projects/Altimetric.png";

import { accordionsData } from "../../data";

export const LocaleAccess = () => {
  return (
    <Flex w="90%" h="90%" align="center" p="2rem" direction="column">
      {accordionsData.map((item, index) => (
        <Accordion allowToggle w="80%" border="none" mt="1rem" key={index}>
          <AccordionItem
            borderRadius="2rem"
            p="1rem"
            bg="brand.700"
            transition="all 0.5s"
          >
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold" color="white" fontSize="1.2rem">
                  {item.title}
                </Text>
              </Box>
              <AccordionIcon color="white" fontSize="2rem" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {!item.isList ? (
                <Text color="brand.900">{item.description}</Text>
              ) : (
                <List spacing={3}>
                  {item.list?.map((item, index) => (
                    <ListItem display="flex" alignItems="center" key={index}>
                      <ListIcon as={BsFillCheckCircleFill} color="brand.900" />
                      <Text color="brand.900">{item.description}</Text>
                    </ListItem>
                  ))}
                </List>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      <Flex
        bg="rgba.black"
        w="auto"
        h="auto"
        direction="column"
        p="2rem"
        mt="2rem"
        borderRadius="2rem"
        justify="center"
        align="center"
      >
        <Heading
          fontWeight="bold"
          color="brand.900"
          fontSize="3rem"
          textAlign="center"
          fontStyle="oblique"
        >
          Localização e Acesso
        </Heading>
        <Flex justifyContent="space-between" w="100%" align="center">
          <Image w="35%" h="85%" borderRadius="1rem" src={Total} alt="Imagem" />
          <Image
            w="60%"
            h="85%"
            borderRadius="1rem"
            src={Locale}
            alt="Imagem"
          />
        </Flex>
        <Flex justifyContent="space-between" w="100%">
          <Image
            w="45%"
            h="90%"
            borderRadius="1rem"
            src={Locations}
            alt="Imagem"
          />
          <Flex direction="column" w="50%">
            <Image
              w="100%"
              h="90%"
              borderRadius="1rem"
              src={Route}
              alt="Imagem"
            />
            <Text
              color="brand.900"
              mt="1rem"
              textAlign="center"
              fontSize="1rem"
            >
              O empreendimento dista aproximadamente 32 km do perímetro urbano
              de Serra Talhada, com acessos que se dão pela Rodovia BR-232.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" w="90%" mt="2rem">
          <Image
            w="100%"
            h="90%"
            borderRadius="1rem"
            src={ReferencePoint}
            alt="Imagem"
          />
          <Text
            color="brand.900"
            mt="1rem"
            textAlign="center"
            fontSize="1rem"
          >
            Rodovia BR-232 nas proximidades do empreendimento.
          </Text>
        </Flex>
        <Divider bg="brand.900" m="2rem 0" />
        <Heading
          fontWeight="bold"
          color="brand.900"
          fontSize="3rem"
          textAlign="center"
          fontStyle="oblique"
        >
          Caracterização do Terreno da UFV
        </Heading>
        <Flex justifyContent="space-between" w="100%" mt="2rem">
          <Flex direction="column" w="47%">
            <Image
              w="100%"
              h="90%"
              borderRadius="1rem"
              src={Altimetric}
              alt="Imagem"
            />
            <Text
              color="brand.900"
              mt="1rem"
              textAlign="center"
              fontSize="1.rem"
            >
              Mapa Altimétrico da área: A região é de baixa complexidade do
              ponto de vista topográfico, caracterizada por uma superfície de
              pediplanação bastante monótona, relevo predominantemente
              suave-ondulado
            </Text>
          </Flex>
          <Flex direction="column" w="47%">
            <Image
              w="100%"
              h="90%"
              borderRadius="1rem"
              src={Declive}
              alt="Imagem"
            />
            <Text
              color="brand.900"
              mt="1rem"
              textAlign="center"
              fontSize="1rem"
            >
              Mapa de declividade da área o empreendimento
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
