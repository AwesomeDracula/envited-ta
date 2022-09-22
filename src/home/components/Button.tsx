import { Flex } from "@chakra-ui/react";
import React from "react";

type ButtonProps = {
  onClick: any;
};

const ButtonCreate = (props: ButtonProps) => {
  return (
    <Flex
      bgGradient="linear(90deg, #8456EC 3.25%, #E87BF8 100%)"
      borderRadius="10px"
      color="white"
      fontWeight={700}
      fontSize="16px"
      mx={{ xs: "30px", sm: "70px", md: "250px", lg: "325px", xl: 0 }}
      p={{ xl: "16px" }}
      px={{ xl: "60px" }}
      mt="20px"
      textAlign="center"
      height={{ xs: "50px", md: "55px" }}
      alignItems="center"
      justifyContent="center"
      onClick={props.onClick}
    >
      🎉 Create my event
    </Flex>
  );
};

export default ButtonCreate;
