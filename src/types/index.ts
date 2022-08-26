import { ChakraProps } from "@chakra-ui/react";

export type ButtonProps = {
  name: string;
  route: string;
}

export type ButtonComponentProps = {
  title: string;
  action?: any;
} & ChakraProps;