import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as EventSvg } from "src/common/assets/images/event.svg";
import { eventData } from "../mocks/eventData";
import EventItem from "./EventItem";

export const Event = () => {
  return (
    <HStack alignItems="start" spacing="0">
      <VStack flexGrow={1} h="100vh" overflow="auto" spacing="0" bg="#FBFAFF">
        <Flex
          w="full"
          flexGrow={1}
          m="0px"
          overflow="auto"
          flexDirection={{ xs: "column", sm: "column", xl: "row-reverse" }}
          alignItems={{ xl: "start" }}
          mt={{ xl: "184px" }}
        >
          <Center
            w={{ sm: "full", xl: "50%" }}
            px={{ md: "180px" }}
            marginTop={{ md: "80px", xl: 0 }}
          >
            <EventSvg width="auto" height="auto" />
          </Center>

          <Box px={{ md: "180px" }}>
            <Box p="20px" pt={{ xl: 0 }}>
              <Text
                w="full"
                color="primaryPalette.purpleDark"
                fontSize={{ sm: "28px", lg: "48px" }}
                fontWeight={700}
              >
                Birthday Bash
              </Text>
              <Flex>
                <Text fontSize="14px" fontWeight={400}>
                  Hosted by&nbsp;
                </Text>
                <Text fontSize="14px" fontWeight={700}>
                  Elysia
                </Text>
              </Flex>
            </Box>
            {eventData.map((event) => (
              <EventItem
                icon={event.icon}
                title={event.title}
                description={event.description}
              />
            ))}
          </Box>
        </Flex>
      </VStack>
    </HStack>
  );
};
