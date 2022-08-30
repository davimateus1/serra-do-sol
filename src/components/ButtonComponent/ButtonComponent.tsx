import { Button } from "@chakra-ui/react";
import { ButtonComponentProps } from "../../types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  action,
  ...rest
}) => {
  return (
    <Button
      w="15rem"
      minH="4rem"
      bg="brand.800"
      color="white"
      fontSize="xl"
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
      onClick={action}
      {...rest}
    >
      {title}
    </Button>
  );
};
