import { Field, Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { EVENT } from "src/common/constants/routes.constants";

export default function CreateEvent() {
  const navigate = useNavigate();
  return (
    <Flex bg="white" align="center" justify="center" h="100vh">
      <Box bg="secondaryPalette.purple2" p={6} rounded="md" w={{ sm: 64, md: "50%" }}>
        <Formik
          initialValues={{
            eventName: "",
            hostName: "",
            startTime: "",
            endTime: "",
            location: "",
            photoUrl: "",
          }}
          onSubmit={() => {
            navigate(EVENT);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="eventName">Event Name</FormLabel>
                  <Field
                    as={Input}
                    id="eventName"
                    name="eventName"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="hostName">Host Name</FormLabel>
                  <Field
                    as={Input}
                    id="hostName"
                    name="hostName"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="startTime">Start Time</FormLabel>
                  <Input
                    placeholder="Select Start Time"
                    size="md"
                    type="datetime-local"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="endTime">End Time</FormLabel>
                  <Input placeholder="Select End Time" size="md" type="datetime-local" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <Field
                    as={Input}
                    id="location"
                    name="location"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="photoUrl">Photo link</FormLabel>
                  <Field
                    as={Input}
                    id="photoUrl"
                    name="photoUrl"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <Button
                  bgGradient="linear(90deg, #8456EC 3.25%, #E87BF8 100%)"
                  borderRadius="10px"
                  color="white"
                  fontWeight={700}
                  fontSize="16px"
                  type="submit"
                  width="full"
                >
                  Next
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
