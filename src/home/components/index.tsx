import { CREATE } from "src/common/constants/routes.constants";
import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as LandingSvg } from "src/common/assets/images/landing.svg";
import Button from "./Button";

function Home() {
  const navigate = useNavigate();
  return (
    <HStack alignItems="start" spacing="0">
      <VStack flexGrow={1} h="100vh" overflow="auto" spacing="0">
        <Box
          w="full"
          bg="secondaryPalette.purple3"
          flexGrow={1}
          m="0px"
          p="6"
          overflow="auto"
          px={{ xl: "160px" }}
        >
          <Box float={{ xl: "right" }} mt={{ xl: "200px" }}>
            <Text
              lineHeight="36px"
              fontSize="36px"
              fontWeight={700}
              color="primaryPalette.purpleDark"
              textAlign={{ xs: "center", xl: "right" }}
            >
              Imagine if
            </Text>
            <Text
              bgGradient="linear(90deg, #8456EC 24.2%, #E87BF8 120.46%)"
              bgClip="text"
              fontSize="36px"
              fontWeight="700"
              textAlign={{ xs: "center", xl: "right" }}
            >
              Snapchat
            </Text>
            <Text
              lineHeight="36px"
              fontSize="36px"
              fontWeight={700}
              color="primaryPalette.purpleDark"
              textAlign={{ xs: "center", xl: "right" }}
            >
              had events.
            </Text>
            <Text
              textAlign={{ xs: "center", xl: "right" }}
              mt="16px"
              color="neutral.100"
              fontSize="16px"
              fontWeight={300}
              mx={{ xs: "28px", md: "200px", lg: "280px", xl: 0 }}
            >
              Easily host and share events with your friends across any social media
            </Text>
          </Box>
          <Center mt={{ xs: "20px", xl: "20px" }} float={{ xl: "left" }}>
            {/* <LandingSvg width="100%" /> */}
            <Image
              w={{ xs: "200px", md: "310px", xl: "440px" }}
              src={require("src/common/assets/images/landing.png")}
            />
          </Center>
          <Box float={{ xl: "right" }} ml={{ xl: "400px" }}>
            <Button onClick={() => navigate(CREATE)} />
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
}

export default Home;
