import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ReactComponent as ArrowSvg } from "src/common/assets/images/Arrow.svg";

type EventItemProps = {
  icon: string;
  title: string;
  description: string;
};

const EventItem = (props: EventItemProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px="20px" my="16px">
      <Flex>
        <Box
          w={{ sm: "48px", lg: "56px" }}
          borderRadius="10px"
          p="12px"
          boxShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
          mr="20px"
        >
          <Image src={props.icon} />
        </Box>
        <Box>
          <Text color="primaryPalette.purpleDark" fontWeight={700} fontSize="18px">
            {props.title}
          </Text>
          <Text color="neutral.100" fontWeight={400} fontSize="14px">
            {props.description}
          </Text>
        </Box>
      </Flex>
      <ArrowSvg />
    </Flex>
  );
};

export default EventItem;
