import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DiAndroid, DiCodeigniter, DiWebplatform } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="16" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          4+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of experience
        </Text>
      </Box>
      <Box alignSelf="center" py="16">
        <Text fontWeight="bold" fontSize="1xl">
          Product Designer and Developer, specialized in mobile applications
          development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            direction="column"
            rounded="xl"
            mt={4}
            bg="blue.400"
            h={isNotSmallerScreen ? "30vh" : "50vh"}
            w={isNotSmallerScreen ? "30vh" : "50vh"}
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>

          <Flex
            direction="column"
            rounded="xl"
            ml={isNotSmallerScreen ? "4" : "0"}
            mt={4}
            bg="gray.100"
            h={isNotSmallerScreen ? "30vh" : "50vh"}
            w={isNotSmallerScreen ? "30vh" : "50vh"}
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>

          <Flex
            direction="column"
            rounded="xl"
            ml={isNotSmallerScreen ? "4" : "0"}
            mt={4}
            bg="green.400"
            h={isNotSmallerScreen ? "30vh" : "50vh"}
            w={isNotSmallerScreen ? "30vh" : "50vh"}
            justify="flex-end"
            _hover={{ bg: "green.500" }}
          >
            <Icon color="black" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
